# frozen_string_literal: true

require_relative './list'
DEFAULT_MIN_LIST_LENGTH = 24

module Tree
  class TreeNode
    # Monkey patching a method for returning modified preordered tree traversal values and other node related data
    def yield_d3_values(_domain_index)
      left_counter = 1
      used_numbers = []
      preordered_each do |n, i|
        left_counter += 1 while used_numbers.include?(left_counter)
        lft = left_counter
        rgt = (n.size == 1 ? (lft + 1) : lft + 2 * n.size - 1)
        rgt += 1 while used_numbers.include?(rgt)
        used_numbers.push(lft)
        used_numbers.push(rgt)
        n.content = "L#{lft}R#{rgt}-incomplete" if block_given?
        yield({ id: i, lft: lft, rgt: rgt }, n.name, n.content) if block_given?
      end
    end
  end
end

# Acts as a Repo for methods pertaining to SQL -> Tree:TreeNode -> JSON conversion and subsequent manipulation
class Subtree
  attr_reader :root_node
  EMPTY_CHILDREN = { 'children' => [] }

  @@node_repo = Hht::Container.resolve('repos.habit_node_repo')

  def initialize(root_node = '', nodes_array = [])
    @root_node = root_node
    @descendant_nodes = nodes_array
  end

  def build_from_tuples(root_node, date_id, _repo)
    root_id = root_node.id.to_s
    node_dict = { root_id => root_node.to_tree_node_with_habit_status(date_id) }

    @descendant_nodes.select(&:has_habit_node?) # Reject nodes not linked to a habit
                     .each do |node, _idx|
      id = node.id
      parent_id = node.parent_id
      new_tree_node = node.to_tree_node_with_habit_status(date_id)
      node_dict[id.to_s] = new_tree_node unless node_dict[id.to_s]
      (node_dict[parent_id.to_s] << new_tree_node) unless new_tree_node.nil? || node_dict[parent_id.to_s].nil?
    end
    
    @root_node = node_dict[root_id]
    self
  end

  def as_d3_json(depth)
    root_json = @root_node.as_json
    new_json = { 'content' => root_json[:content].to_s, 'name' => root_json[:name].to_s }

    if(depth == 0) 
      return new_json.merge(EMPTY_CHILDREN)
    end
    
    children_json = if !root_json['children'].nil? && root_json['children'].size > 0
                      { 'content' => root_json[:content].to_s, 'children' => root_json['children'].map do |child|
                                                                               Subtree.new(child).as_d3_json(depth-1)
                                                                             end }
                    else
                      EMPTY_CHILDREN
                    end
    new_json.merge(children_json)
  end

  def to_d3_json(depth)
    as_d3_json(depth).to_json
  end

  class << self
    # Generates a Tree::TreeNode root node from tuples
    def generate(root_id, date_id)
      nodes = @@node_repo.map_node_and_descendants_to_struct_nodes(root_id)
      return nil if nodes.nil?

      nodes_array = nodes.to_a
      root_node = @@node_repo.by_id(root_id).one


      subtree = Subtree.new(root_node.to_tree_node_with_habit_status(date_id), nodes_array)
      subtree.build_from_tuples(root_node, date_id, @@node_repo)
      subtree
    end

    # Perform a 'ternarising' iteration on a json_tree
    def json_to_ternarised_and_listified_treenodes(json_tree, lower_list_limit = DEFAULT_MIN_LIST_LENGTH)
      each_after_json_to_treenodes(json_tree) do |node|
        children = node.content[:children]
        next if children.nil?

        unless children.empty?
          if children.size > lower_list_limit
            node.replace_with(listify(node, children))
          elsif children.size > 3
            node.parent ? node.replace_with(ternarise(node, children)) : node
          end
        end
      end
    end

    # Split a long list of node children into subparts of at most 3 child nodes.
    # Node children arrays of size > DEFAULT_MIN_LIST_LENGTH will be added to node content as a List
    def ternarise(parent, child_node_array)
      subpart_counter = 1
      new_parent = Tree::TreeNode.new(parent.name)

      child_node_array.each_slice(3) do |sub_array|
        subpart_name = "Sub-Habit #{subpart_counter}"
        new_subpart = Tree::TreeNode.new(subpart_name, sub_array)
        # TODO: create a new habit here, link it to the node-id
        append_treenode_children(new_subpart, sub_array)
        new_parent << new_subpart

        subpart_counter += 1
      end
      new_parent
    end

    # Make child nodes into a simple list
    def listify(parent, child_node_array)
      Tree::TreeNode.new(parent.name, List.new(child_node_array, 'name').list)
    end

    # Preorder traversal of json tree, converting each node to Tree::TreeNode and yielding
    def each_after_json_to_treenodes(json_tree, _parent = nil)
      hash_node = JSON.parse(json_tree)
      # Create a new parent node and store the JSON as 'content' in the TreeNode
      node = Tree::TreeNode.new(hash_node['name'], { content: hash_node['content'], children: hash_node['children'] })

      nodes = [node]
      next_nodes = []

      # Map ALL json nodes to singleton TreeNodes
      while (node = nodes.pop)
        next_nodes.push(node)
        unless (node.content['children'] || node.content[:children]) && (children = (node.content['children'] || node.content[:children])) && !children.empty?
          next
        end

        children.each do |child|
          nodes.push(Tree::TreeNode.new(child['name'], { content: '', children: child['children'] }))
        end
      end

      next_nodes.sort_by { |node| node.name.to_i }.each do |node|
        (node.content['children'] || node.content[:children])&.each do |child|
          node << next_nodes.find { |next_child| child['name'] == next_child.name }
        end
        yield node if block_given?
      end
      next_nodes.first
    end

    def append_treenode_children(parent, child_node_array)
      child_node_array.each_with_object(parent) do |child, parent_node|
        parent_node << each_after_json_to_treenodes(child.to_json, parent_node)
      end
    end
  end
end
