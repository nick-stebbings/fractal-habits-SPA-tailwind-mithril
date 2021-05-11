# frozen_string_literal: true

module Hht
  module Transactions
    module HabitDates
      class Update
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'repos.habit_node_repo',
          'repos.habit_repo',
          'repos.habit_date_repo'
        ]

        def call(tuple, status)
          habit_date = yield persist(tuple, status)
          Success(habit_date)
        end

        def persist(existing_tuple, status)
          values = existing_tuple.one
          habit_id = values[:habit_id]
          habit = habit_node_repo.by_id(habit_id).one

          # Find direct ancestor nodes and toggle their status if they have only one child
          single_child_parents = habit_node_repo.materialised_single_parent_lineage_of_child(habit.to_h)
          single_child_parents.each do |ancestor|
            habit_date = habit_date_repo.query(habit_id: ancestor[:id], date_id: values[:date_id])
            habit_date.update(completed_status: status)
          end
          # TODO : dry this up
          Success(existing_tuple.update(completed_status: status))
        end
      end
    end
  end
end
