
class Subtree
  attr_reader :root_node

  def initialize(root_node = '', nodes_array = [])
    @root_node = root_node
    @descendant_nodes = nodes_array
  end

  class << self
    def generate(root_id, repo)
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

    def json_each_after(json_node)
      hash_node = JSON.parse(json_node)
      node = Tree::TreeNode.new(hash_node['name'], hash_node['children'])
      nodes = [node]
      next_nodes = []
      
      while (node = nodes.pop())
        next_nodes.push(node)
        if ((node.content) && (children = node.content) && !children.empty?)
          children.each do |child|
            nodes.push(Tree::TreeNode.new(child['name'], child['children']))
          end
        end
      end
      
      next_nodes.each do |node|
        children = node.content
        if (!children.empty?)
          children.each do |child|
            child_to_append = next_nodes.find{ |potential| child['name'] == potential.name }
            
            yield node if block_given?
            node << child_to_append
          end
        end
      end
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
