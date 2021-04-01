# frozen_string_literal: true

module Entities
  class HabitNode < ROM::Struct
    attr_reader :attributes

    require 'tree'

    def initialize(attributes)
      @attributes = attributes
    end

    def to_s
      to_tree_node.to_s
    end

    def to_tree_node
      Tree::TreeNode.new(attributes[:id].to_s, "L#{attributes[:lft]}R#{attributes[:rgt]}")
    end

    def to_habit_tree_node
      habit = habits.habit_for_habit_node(attributes[:id].to_i)
      completed_status = 
      Tree::TreeNode.new(attributes[:id].to_s, "L#{attributes[:lft]}R#{attributes[:rgt]}")
    end
  end
end
