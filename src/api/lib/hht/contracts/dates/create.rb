# frozen_string_literal: true

module Hht
  module Contracts
    module Dates
      class Create < Dry::Validation::Contract
        include Import['repos.date_repo']
        params do
          required(:h_date).filled(:date)
        end

        rule(:h_date) do
          key.failure('Must not be in the future.') if value >= Date.today
        end
      end
    end
  end
end
