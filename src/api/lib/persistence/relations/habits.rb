# frozen_string_literal: true

module Persistence
  module Relations
    class Habits < ROM::Relation[:sql]
      schema(:habits) do
        attribute :id, Types::Integer
        attribute :name, Types::String
        attribute :description, Types::String
        attribute :domain_id, Types::ForeignKey(:domains)
        attribute :habit_node_id, Types::ForeignKey(:habit_nodes)
        primary_key :id

        associations do
          belongs_to :habit_nodes, as: :habit_node
          belongs_to :domains, as: :domain
          has_many :habit_dates
          has_many :dates, through: :habit_dates
        end
      end

      def all
        habits.to_a
      end

      def habit_for_habit_node(habit_node_id)
        join(:habit_nodes, id: :habit_node_id).where(habit_node_id: habit_node_id)
      end
    end
  end
end
