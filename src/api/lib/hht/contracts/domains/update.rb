# frozen_string_literal: true

module Hht
  module Contracts
    module Domains
      class Update < Dry::Validation::Contract
        include Dry::Monads[:result]
        include Import['repos.domain_repo']

        params do
          required(:name).value(:string)
          required(:description).value(:string)
          required(:rank).value(:integer)
          required(:hashtag).value(:string)
        end
      end
    end
  end
end
