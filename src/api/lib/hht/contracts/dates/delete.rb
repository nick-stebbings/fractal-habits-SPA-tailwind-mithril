# frozen_string_literal: true

module Hht
  module Contracts
    module Dates
      class Delete < Dry::Validation::Contract
        include Import['repos.date_repo']
        params do
          required(:id).filled(:integer)
        end

        rule(:id) do
          key.failure('Must be a positive integer.') unless (value.is_a? Integer) && value.positive?
        end

        rule(:id) do
          key.failure('Date does not exist.') unless date_repo.dates.by_pk(value).one
        end
      end
    end
  end
end
