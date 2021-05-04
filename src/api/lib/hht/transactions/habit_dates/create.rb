# frozen_string_literal: true

module Hht
  module Transactions
    module HabitDates
      class Create
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
          binding.pry
          # Find direct ancestor nodes and toggle their status if they have only one child
          single_child_ancestors = habit_node_repo.single_parent_lineage_of_child(result).to_a
        end
      end
    end
  end
end