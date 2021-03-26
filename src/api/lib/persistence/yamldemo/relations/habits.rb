
  module Yamldemo
  module Relations
      class Habits < ROM::Relation[:yaml]
        # struct_namespace Entities
        schema(:habits) do
          attribute :id, Types::Integer
          attribute :name, Types::String
        end
    
      end
    end
  end

# Algorithm for (tidying tree) adding habits with domain id.
# Iterate through the domains, for each domain:
 # convert the domain[habits] habit_tree into a Tree (rubygem)
 # -STEP 1
 # get an array of treeNodes with a parent_id, name, id
 
  # FOR EACH habit 
   # CREATE a habit in the habit_repo, NEED ATTRIBUTES: id , domain_id (same value)
   # MAP to a tree node
   # FOR EACH child, << to the parent.
   # increment count
   # IF the index/ count is 3, create a new node and append it to the parent.
   # Continue iterating, adding nodes to the new parent.
   # repeat until you have a tree structure
 # 
 
require 'tree'

def map_children_to(parent, child_node_array)
  subpart_counter = 0
  new_sub_parts = Tree::TreeNode.new

  child_node_array.each_slice(3) do |sub_array|
    subpart_name = 'Sub-Habit ' + subpart_counter.to_s
    new_subpart = Tree::TreeNode.new(subpart_name)
    puts new_subpart
    # TODO: create a new habit here, link it to the node-id

    append_children_to(new_subpart, sub_array)
    new_sub_parts << subpart

    subpart_counter += 1
  end
  new_sub_parts
end

def append_children_to(parent, child_node_array)
  child_node_array.reduce(parent) { |root, child| root << ternarise_json_tree(child); return root }
end

def ternarise_json_tree(json)
  root = Tree::TreeNode.new(json['name']) # map to tree node JSON.parse(json)['name']
  if (json['children'] && json['children'].empty?)
    root
  # elsif (json['children'].size <= 3)
  #   Pry.start
  #   append_children_to(root, json['children'])
  else # GIVE ME BACK A SUBTREE THAT IS ALREADY TERNARISED
    Pry.start
    # map_children_to(root, json['children'])
  end
end

def each_after(callback, json_node)
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
        child_to_append = next_nodes.find{|potential| child['name'] == potential.name }
        node << child_to_append
      end
    end
end


# export default function(callback, that) {
#   var node = this, nodes = [node], next = [], children, i, n, index = -1;
#   while (node = nodes.pop()) {
#     next.push(node);
#     if (children = node.children) {
#       for (i = 0, n = children.length; i < n; ++i) {
#         nodes.push(children[i]);
#       }
#     }
#   }
#   while (node = next.pop()) {
#     callback.call(that, node, ++index, this);
#   }
#   return this;
# }
# function count(node) {
#   var sum = 0,
#       children = node.children,
#       i = children && children.length;
#   if (!i) sum = 1;
#   else while (--i >= 0) sum += children[i].value;
#   node.value = sum;
# }

# export default function() {
#   return this.eachAfter(count);
# }