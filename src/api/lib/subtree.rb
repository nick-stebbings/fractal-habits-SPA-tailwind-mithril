# frozen_string_literal: true

# Tree data structure (constructed of TreeNodes, hence Tree namespace already taken)
class Subtree
  attr_reader :root_node

  def initialize(root_node, nodes_array)
    @root_node = root_node
    @descendant_nodes = nodes_array
  end

  def build
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

  def self.as_json(tree)
    root_json = tree.as_json
    new_json = { 'name' => root_json[:name].to_s }
    children_json = if root_json['children']
                      { 'children' => root_json['children'].map { |child| as_json(child) } }
                    else
                      { 'children' => [] }
                    end
    new_json.merge(children_json)
  end

  def self.hash_to_tree(hash)
    root_id = habit_node_repo.create({parent_id: nil}).or(nil)
    if(root_id)
      root = habit_node_repo.by_id(root_id.flatten).first.to_tree_node
    end

  end
end
