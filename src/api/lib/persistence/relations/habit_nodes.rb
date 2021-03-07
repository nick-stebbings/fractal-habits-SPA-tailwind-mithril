# frozen_string_literal: true

module Persistence
  module Relations
    class HabitNodes < ROM::Relation[:sql]
      schema(:habit_nodes) do
        attribute :id, Types::Integer
        attribute :parent_id, Types::ForeignKey(:habit_nodes)
        attribute :lft, Types::Integer
        attribute :rgt, Types::Integer

        primary_key :id
        # attribute :habit_id, Types::ForeignKey(:habits)

        associations do
          belongs_to :habits, as: :habit_tree_node
          belongs_to :habit_nodes, as: :parent
        end
      end

      def all
        habit_nodes.to_a
      end
    end
  end
end
