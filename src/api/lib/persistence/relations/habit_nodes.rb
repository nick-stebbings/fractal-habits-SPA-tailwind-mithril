# frozen_string_literal: true

module Persistence
  module Relations
    class HabitNodes < ROM::Relation[:sql]
      schema(:habit_nodes) do
        attribute :id, Types::Integer
        attribute :parent_id, Types::ForeignKey(:habit_nodes)
        attribute :lft, Types::Integer
        attribute :rgt, Types::Integer

        primary_key :id
        associations do
          belongs_to :habits, as: :habit_node
          belongs_to :habit_nodes, as: :parent
        end
      end

      def all
        to_a
      end

      def all_ordered_left
        habit_nodes.order(:lft)
      end

      def root_node
        where(parent_id: nil)
      end

      def root_id_of_domain(domain_id)
        join(:habits, habit_node_id: :id)
          .root_node
          .where(domain_id: domain_id)
      end

      def root_node_children
        children_of_parent(root_node)
      end

      def children_of_parent(parent_id)
        where(parent_id: parent_id)
      end
    end
  end
end
