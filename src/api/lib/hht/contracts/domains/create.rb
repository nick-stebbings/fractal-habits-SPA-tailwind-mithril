# frozen_string_literal: true

module Hht
  module Contracts
    module Domains
      class Create < Dry::Validation::Contract
        include Dry::Monads[:result]
        include Import['repos.domain_repo']

        params do
          required(:name).value(:string)
          required(:description).value(:string)
        end

        rule(:name) do
          key.failure('Domain already exists') unless domain_repo.query(name: value).to_a.empty?
        end
      end
    end
  end
end
