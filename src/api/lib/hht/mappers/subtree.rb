# frozen_string_literal: true

require 'tree'
require 'rom/transformer'

module Hht
  module Mappers
    # Subtree made of RubyTree nodes
    class Subtree < ROM::Transformer
      relation :habit_nodes
      register_as :subtree

      def initialize
        'hello world'
      end
    end
  end
end
