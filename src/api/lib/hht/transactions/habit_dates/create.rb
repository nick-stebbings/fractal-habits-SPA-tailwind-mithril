# frozen_string_literal: true

module Hht
  module Transactions
    module HabitDates
      class Create
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'contracts.habit_dates.create',
          'repos.habit_date_repo',
          'repos.habit_repo',
          'repos.habit_node_repo',
        ]

        def call(input)
          values = yield validate(input)
          habit_date = yield persist(values)
          Success(habit_date)
        end

        def validate(input)
          create.call(input).to_monad
        end

        def persist(result)
          values = result.to_h
          habit_id = values[:habit_id]
          habit = habit_node_repo.by_id(habit_id).one

          # Find direct ancestor nodes and toggle their status if they have only one child
          # single_child_parents = habit_node_repo.materialised_single_parent_lineage_of_child(habit.to_h)
          # single_child_parents.each do |ancestor|
          #   habit_date = habit_date_repo.query(habit_id: ancestor[:id], date_id: values[:date_id])
          #   if habit_date.exist?
          #     habit_date.update(completed_status: values[:completed_status])
          #   else 
          #     habit_date_repo.create({
          #       habit_id: ancestor[:id],
          #       date_id: values[:date_id], 
          #       completed_status: values[:completed_status]
          #     })
          #   end
          # end

          Success(habit_date_repo.habit_dates.insert(values))
        end
      end
    end
  end
end
