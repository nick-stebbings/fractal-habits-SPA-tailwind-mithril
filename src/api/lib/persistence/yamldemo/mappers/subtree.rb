# frozen_string_literal: true

require 'tree'
require 'rom/transformer'

module Yamldemo
  module Mappers
    # Subtree made of RubyTree nodes
    class Subtree < ROM::Transformer
      relation :habits
      register_as :subtree

      def call(relation)
        id = 0
        relation.map do |tuple|
          id += 1
          Tree::TreeNode.new(tuple[:name])
        end
      end
    end
  end
end
