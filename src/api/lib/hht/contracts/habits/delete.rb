# frozen_string_literal: true

module Hht
  module Contracts
    module Habits
      class Delete < Dry::Validation::Contract
        include Import['repos.habit_repo']
        params do
          required(:id).filled(:integer)
        end

        rule(:id) do
          key.failure('Must be a positive integer.') unless (value.is_a? Integer) && value.positive?
        end

        rule(:id) do
          key.failure('Habit does not exist.') unless habit_repo.by_id(value).one
        end
      end
    end
  end
end
