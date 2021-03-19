# frozen_string_literal: true

module Hht
  module Contracts
    module Domains
      class Create < Dry::Validation::Contract
        include Import['repos.domain_repo']
        params do
          required(:name).filled(:string)
          required(:description).filled(:string)
        end
      end
    end
  end
end
