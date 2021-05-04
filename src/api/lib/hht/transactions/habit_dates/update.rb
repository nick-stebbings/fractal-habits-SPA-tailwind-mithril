# frozen_string_literal: true

module Hht
  module Transactions
    module HabitDates
      class Update
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'repos.habit_date_repo',
          'repos.habit_repo',
        ]

        def call(input)
          habit_date = yield persist(values)
          Success(habit_date)
        end

        def persist(result)
          habit_id = result.values.data[:habit_id]
          # Find direct ancestor nodes and toggle their status if they have only one lineage
          ancestors = habit_node_repo.habit_nodes.children_of_parent(parent_id).to_a
        end
      end
    end
  end
end
