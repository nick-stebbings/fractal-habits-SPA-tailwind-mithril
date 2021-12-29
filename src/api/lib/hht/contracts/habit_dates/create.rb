# frozen_string_literal: true

module Hht
  module Contracts
    module HabitDates
      class Create < Dry::Validation::Contract
        include Import['repos.date_repo', 'repos.habit_repo']
        params do
          required(:habit_id).filled(:integer)
          required(:date_id).filled(:integer)
          required(:completed_status).filled(:bool)
        end

        rule(:habit_id) do
          key.failure('Habit does not exist.') unless habit_repo.by_id(value).exist?
        end

        rule(:date_id) do
          key.failure('Date does not exist.') unless date_repo.by_id(value).exist?
        end
      end
    end
  end
end
