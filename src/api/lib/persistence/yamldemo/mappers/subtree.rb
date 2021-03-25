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
        relation.each do |tuple|
          puts tuple.id
        end
        []
      end
    end
  end
end
