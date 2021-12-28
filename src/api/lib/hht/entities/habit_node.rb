# frozen_string_literal: true

module Entities
  class HabitNode < ROM::Struct
    attr_reader :attributes, :lft, :rgt, :habit_id, :completed_status

    @@habit_repo = Hht::Container.resolve('repos.habit_repo')
    @@habit_date_repo = Hht::Container.resolve('repos.habit_date_repo')
    require 'tree'

    def initialize(attributes)
      @attributes = attributes
      @lft = attributes[:lft]
      @rgt = attributes[:rgt]
      @id = attributes[:id].to_i
      @habit_id = (has_habit_node? && !@@habit_repo.habit_for_habit_node(id).one.nil?) ? @@habit_repo.habit_for_habit_node(id).one.id : nil
    end

    def to_s
      to_tree_node.to_s
    end

    def to_tree_node
      Tree::TreeNode.new(@@habit_repo.by_id(habit_id).one.name, "L#{lft}R#{rgt}")
    end

    def to_tree_node_with_habit_status(date_id)
      if(habit_id)
        habit = @@habit_repo.by_id(habit_id).one
        init_date = habit.initiation_date
        date_tuple_of_current = @@habit_repo.dates.to_a.select {|d| d.id == date_id}[0]
        init_date_older_than_date_tuple = !(date_tuple_of_current.nil?) && (date_tuple_of_current.h_date.to_date.jd >= init_date.to_date.jd) # Is this habit 'active' on this date?
        completed_status = date_tuple_of_current.nil? ? "OOB" : (init_date_older_than_date_tuple ? @@habit_date_repo.completed_status_for_query(date_id, habit_id) : 'OOB')
        return Tree::TreeNode.new(habit.name, "L#{lft}R#{rgt}-#{completed_status}")
      end
    end

    def has_habit_node?
      @@habit_repo.habit_for_habit_node(id).exist?
    end
  end
end
