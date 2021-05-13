# frozen_string_literal: true

module Hht
  module Repos
    # One-use changeset for incrementing lft/rgt values:
    class MpttChangeset < ROM::Changeset::Update
      map do |tuple|
        tuple.merge({ lft: tuple[:lft] + 1, rgt: tuple[:rgt] + 1 })
      end
    end
    class HabitNodeRepo < ROM::Repository[:habit_nodes]
      include Import['persistence.container']
      # struct_namespace Entities
      commands update: :by_pk

      def create(parent)
        Hht::Transactions::HabitNodes::Create.new.call(parent)
      end

      def delete(attrs)
        node = by_id(attrs[:id]).one
        node_descendants = nest_parent_with_descendant_nodes_between_lr(node[:lft], node[:rgt])
                           .order { (rgt - lft).asc }
                           .map { |n| n[:id] }
                           .to_a
        node_descendants.each do |descendant_id|
          Hht::Transactions::HabitNodes::Delete.new.call({ id: descendant_id })
        end
      end

      # restrict by passed criteria
      def query(criteria)
        habit_nodes.where(criteria)
      end

      # project on the id attribute
      def ids
        habit_nodes.pluck(:id)
      end

      # restrict on the id attribute
      def by_id(id)
        habit_nodes.by_pk(id)
      end

      def as_json(id)
        habit_node = by_id(id).one
        return nil unless habit_node

        {
          'id' => habit_node.fetch(:id),
          'lft' => habit_node.fetch(:lft),
          'rgt' => habit_node.fetch(:rgt),
          'parent_id' => habit_node.fetch(:parent_id)
        }
      end

      def all_as_json
        { habit_nodes: ids.to_a.map { |id| as_json(id) } }.to_json
      end

      def restrict_on_id_combine_with_domain(id)
        habit_nodes.combine(:domains).by_pk(id)
      end

      def restrict_on_parent_id_combine_with_children(id)
        habit_nodes.children_of_parent(id).combine(:habit_nodes)
      end

      # Nested relation of nodes with parents, retricted by lft/rgt values
      def nest_parent_with_descendant_nodes_between_lr(lft_val, rgt_val)
        habit_nodes
          .where { lft >= lft_val }
          .where { rgt <= rgt_val }
          .combine(habit_nodes: :parent)
      end

      # Single parent nodes for habit status updates
      def materialised_single_parent_lineage_of_child(child_node)
        ids = habit_nodes
              .where { lft < child_node[:lft] }
              .where { rgt > child_node[:rgt] }
              .to_a
              .map(&:id)

        # Do a second query to restrict only to 'single parents'
        nodes = ids.select do |id|
                  restrict_on_parent_id_combine_with_children(id).to_a.size == 1
                end.map { |id| by_id(id) }.map(&:one)
      end

      def update_parent_id!(node, new_parent_id)
        by_id(node.id)
          .update(parent_id: new_parent_id)
      end

      ## Subtree Mappings
      def map_node_and_descendants_to_struct_nodes(root_id)
        root = by_id(root_id).exist? ? by_id(root_id).one : nil
        unless root.nil?
          nest_parent_with_descendant_nodes_between_lr(root.lft, root.rgt)
            .order(:lft)
        end
      end

      # Nested relation of children (nesting retricted by parent_id)
      def nest_parent_with_immediate_child_nodes(parent_id)
        nest_parents = habit_nodes
                       .combine(habit_nodes: :parent)
                       .node(:parent) do |habit_node|
          habit_node.by_pk(parent_id)
        end
        nest_parents
          .order(:lft)
      end

      ## Tree::TreeNode Mappings
      def map_children_to_tree_nodes(parent_id)
        nest_parent_with_immediate_child_nodes(parent_id)
          .to_a
          .reject { |node| node.parent.nil? }
          .map(&:to_tree_node)
      end

      def map_node_and_children_to_tree_nodes(parent_id)
        nest_parent_with_immediate_child_nodes(parent_id)
          .to_a
          .select { |node| !node.parent.nil? || node.id == parent_id }
          .map(&:to_tree_node)
      end

      ## Modified preorder traversal queries:
      def increment_all_non_root_mptt_values_by_one!
        habit_nodes.map do |relation|
          changeset = habit_nodes.changeset(MpttChangeset, relation.to_h)
          update(changeset[:id], changeset.to_h)
        end
      end

      # For adjusting 'further right than candidate' nodes
      def nodes_to_adjust_both_values(val)
        habit_nodes
          .where { rgt > val }
          .where { lft > val }
      end

      def nodes_to_adjust_left_only(val)
        habit_nodes
          .where { lft > val }
          .where { rgt <= val }
      end

      def nodes_to_adjust_right_only(val)
        habit_nodes
          .where { rgt > val }
          .where { lft <= val }
      end

      # This method splits the modified pre-order traversal
      # into a minimum number of update queries
      def mptt_node_adjust!(nodes, operation)
        direction = nodes.shift; # Which 'direction' needs updating, (lft/rgt)
        raise ArgumentError if nodes.empty? || nodes[0].length == 1 || nodes[0].length > 3

        if direction == :both
          nodes.each do |node_details|
            id, lft, rgt = node_details
            new_attribs = [lft, rgt].map { |attrib| operation == :add ? (attrib + 2) : (attrib - 2) }
            update(id, %i[lft rgt].zip(new_attribs).to_h)
          end
        else # It is just a lft/rgt atttrib update
          nodes.each do |node_details|
            id, attrib = node_details
            new_value = operation == :add ? (attrib + 2) : (attrib - 2)
            update(id, { direction => new_value })
          end
        end
      end

      # Split the node modification into queries based on which values need modifying
      def mptt_queries(rgt_val)
        change_lft = [:lft, *nodes_to_adjust_left_only(rgt_val).pluck(:id, :lft)]
        change_rgt = [:rgt, *nodes_to_adjust_right_only(rgt_val).pluck(:id, :rgt)]
        change_both = [:both, *nodes_to_adjust_both_values(rgt_val).pluck(:id, :lft, :rgt)]
        [change_lft, change_rgt, change_both]
      end

      # Making the adjustments to 'further right' nodes on :add/:del operations
      def modify_nodes_after(rgt_val, operation, parent_id)
        mptt_queries(rgt_val).each do |node_set|
          # Size of 1 means there is no meaningful data, so skip
          mptt_node_adjust!(node_set, operation) unless node_set.size == 1
        end
        # TODO: add failure branch

        case operation
        when :add
          { lft: (rgt_val + 1), rgt: (rgt_val + 2), parent_id: parent_id }
        when :del
          { message: 'Other nodes modified.' }
        end
      end
    end
  end
end
