# frozen_string_literal: true

module Hht
  module Contracts
    module Habits
      class Create < Dry::Validation::Contract
        include Dry::Monads[:result]
        include Import['repos.habit_repo']

        params do
          required(:name).filled(:string)
          required(:description).maybe(:string)
          required(:initiation_date).filled(:date)
          required(:domain_id).filled(:integer)
          required(:habit_node_id)
        end
        
        rule(:name) do
          key.failure('Habit already exists') unless habit_repo.query(name: value).to_a.empty?
        end
      end
    end
  end
end
