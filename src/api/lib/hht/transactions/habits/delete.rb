# frozen_string_literal: true

module Hht
  module Transactions
    module Habits
      class Delete
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'contracts.habits.delete',
          'repos.habit_repo',
        ]

        def call(input)
          values = yield validate(input)
          habit = yield remove(values)
          Success(habit)
        end

        def validate(input)
          delete.call(input).to_monad
        end

        def remove(result)
          Success(habit_repo.by_id(result.values.data[:id]).delete)
        end
      end
    end
  end
end
