# frozen_string_literal: true

require_relative './list'
DEFAULT_MIN_LIST_LENGTH = 25

class Subtree
  attr_reader :root_node

  def initialize(root_node = '', nodes_array = [])
    @root_node = root_node
    @descendant_nodes = nodes_array
  end

  class << self
    def generate(root_id, node_repo, dom_id, date_id)
      nodes_array = node_repo.map_node_and_descendants_to_struct_nodes(root_id).to_a
      root_node = nodes_array.shift

      subtree = Subtree.new(root_node.to_tree_node, nodes_array)
      subtree.build_from_tuples(date_id, node_repo)
      subtree
    end

    # Perform a 'ternarising' iteration on a json_tree
    def json_to_ternarised_and_listified_treenodes(json_tree, lower_list_limit = DEFAULT_MIN_LIST_LENGTH)
      each_after_json_to_treenodes(json_tree) do |node|
        children = node.content

        if (!children.empty?)
          if(children.size > lower_list_limit)
            node.replace_with(listify(node,children))
          elsif(children.size > 3)
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
        subpart_name = 'Sub-Habit ' + subpart_counter.to_s
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

    def each_after_json_to_treenodes(json_tree, parent = nil)
      hash_node = JSON.parse(json_tree)
      # Create a new parent node and store the JSON as 'content' in the TreeNode
      node = Tree::TreeNode.new(hash_node['name'], hash_node['children'])

      nodes = [node]
      next_nodes = []

      # Map ALL json nodes to singleton TreeNodes
      while (node = nodes.pop())
        next_nodes.push(node)
        if (node.content && (children = node.content) && !children.empty?)
          children.each { |child| nodes.push(Tree::TreeNode.new(child['name'], child['children']))}
        end
      end

      next_nodes.sort_by{ |node| node.name.to_i }.each do |node|
        node.content && node.content.each do |child|
          node << next_nodes.find{ |next_child| child['name'] == next_child.name }
        end
        yield node if block_given?
      end
      next_nodes.first
    end

    def append_treenode_children(parent, child_node_array)
      child_node_array.each_with_object(parent) { |child, parent_node| parent_node << each_after_json_to_treenodes(child.to_json, parent_node) }
    end

    def to_tree_node_with_habit_status(node, date_id, repo)
      id = node.attributes[:id].to_i
      habit_id = repo.habits.habit_for_habit_node(id).exist? ? repo.habits.habit_for_habit_node(id).one.id : nil
      completed_status = habit_id && repo.habit_dates.completed_status_for_query(date_id, habit_id)
      Tree::TreeNode.new(id.to_s, "L#{node.attributes[:lft]}R#{node.attributes[:rgt]}-#{completed_status}")
    end
  end

  def build_from_tuples(date_id, repo)
    root_id = root_node.name.to_s
    node_dict = { root_id => root_node }

    @descendant_nodes.each do |node, _idx|
      id = node.id
      parent_id = node.parent_id

      new_tree_node = node.to_tree_node#_with_habit_status(node, date_id, repo)
      node_dict[id.to_s] = new_tree_node
      (node_dict[parent_id.to_s] << new_tree_node) unless node_dict[parent_id.to_s].nil?
    end

    @root_node = node_dict[root_id]
    self
  end

  def as_d3_json
    root_json = @root_node.as_json
    new_json = { 'value' => root_json[:content].to_s, 'name' => root_json[:name].to_s }
    
    children_json = if root_json['children']
      { 'value' => root_json[:content].to_s, 'children' => root_json['children'].map { |child| Subtree.new(child).as_d3_json } }
    else
    { 'children' => [] }
    end
    new_json.merge(children_json)
  end

  def to_d3_json  
    as_d3_json.to_json
  end
end
