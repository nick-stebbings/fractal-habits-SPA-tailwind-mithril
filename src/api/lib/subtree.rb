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
    def generate(root_id, repo, dom_id, date_id)
      nodes_array = repo.map_node_and_descendants_to_struct_nodes(root_id).to_a
      root_node = nodes_array.shift
      Subtree.new(root_node.to_tree_node, nodes_array).build_from_tuples
    end

    def as_json(tree)
      root_json = tree.as_json
      new_json = { 'name' => root_json[:name].to_s }
      children_json = if root_json['children']
        { 'children' => root_json['children'].map { |child| as_json(child) } }
      else
      { 'children' => [] }
      end
      new_json.merge(children_json)
    end

    def to_json(hash)
      as_json(hash).to_json
    end

    # Perform a 'ternarising' iteration on a Tree::TreeNode
    def ternarise_treenode(node)
      json_each_after(to_json(node), nil, DEFAULT_MIN_LIST_LENGTH)
    end

    # Split a long list of node children into subparts of at most 3 child nodes.
    # Node children arrays of size > lower_list_limit will be added to node content as a List
    def ternarise(parent, child_node_array)
      subpart_counter = 1
      new_parent = Tree::TreeNode.new(parent.name)

      child_node_array.each_slice(3) do |sub_array|
        subpart_name = 'Sub-Habit ' + subpart_counter.to_s
        new_subpart = Tree::TreeNode.new(subpart_name, sub_array)
        # TODO: create a new habit here, link it to the node-id
        map_to_treenode_append_children_to(new_subpart, sub_array)
        new_parent << new_subpart

        subpart_counter += 1
      end
      new_parent
    end

    # Make child nodes into a simple list
    def listify(parent, child_node_array)
      Tree::TreeNode.new(parent.name, List.new(child_node_array, 'name').list)
    end

    # Works in double-recursion with each_after to ternarise
    def map_to_treenode_append_children_to(parent, child_node_array)
      child_node_array.each { |child| parent << json_each_after(child.to_json, parent, DEFAULT_MIN_LIST_LENGTH) }
      parent
    end

    def json_each_after(json_node, parent = nil, lower_list_limit = DEFAULT_MIN_LIST_LENGTH)
      hash_node = JSON.parse(json_node)
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
        children = node.content

        if (!children.empty?)
          if(children.size > lower_list_limit)
            node.replace_with(listify(node,children))
          elsif(children.size > 3)
            node.parent ? node.replace_with(ternarise(node, children)) : node 
          end
          children.each do |child|
            node << next_nodes.find{ |next_child| child['name'] == next_child.name }
          end
          yield node if block_given?
        end
      end
      next_nodes.first
    end
  end

  def build_from_tuples
    root_id = root_node.name.to_s
    node_dict = { root_id => root_node }

    @descendant_nodes.each do |node, _idx|
      id = node.id
      parent_id = node.parent_id
      new_tree_node = node.to_tree_node
      node_dict[id.to_s] = new_tree_node
      (node_dict[parent_id.to_s] << new_tree_node) unless node_dict[parent_id.to_s].nil?
    end

    @root_node = node_dict[root_id]
  end
end
