# frozen_string_literal: true

module Hht
  module Contracts
    module Domains
      class Delete < Dry::Validation::Contract
        include Import['repos.domain_repo']
        params do
          required(:id).filled(:integer)
        end

        rule(:id) do
          key.failure('Must be a positive integer.') unless (value.is_a? Integer) && value.positive?
        end

        rule(:id) do
          key.failure('Domain does not exist.') unless domain_repo.by_id(value).one
        end
      end
    end
  end
end
