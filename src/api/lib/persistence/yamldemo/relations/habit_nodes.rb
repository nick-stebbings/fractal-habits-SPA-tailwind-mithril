module Yamldemo
  module Relations
    class HabitNodes < ROM::Relation[:yaml]
      schema(:habit_nodes) do
        attribute :id, Types::Integer
        attribute :parent_id, Types::ForeignKey(:habit_nodes)
        attribute :lft, Types::Integer
        attribute :rgt, Types::Integer
      end
    end
  end
end