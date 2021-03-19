# frozen_string_literal: true

module Hht
  module Transactions
    module Habits
      class Create
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'contracts.habits.create',
          'repos.habit_repo',
        ]

        def call(input)
          values = yield validate(input)
          habit = yield persist(values)
          Success(habit)
        end

        def validate(input)
          create.call(input).to_monad
        end

        def persist(result)
          id = result.values.data[:id]
          Success(habit_repo.habits.insert(result.values.data))
        end
      end
    end
  end
end
