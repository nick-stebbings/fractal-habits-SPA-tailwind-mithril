# frozen_string_literal: true

module Hht
  module Contracts
    module Dates
      class Delete < Dry::Validation::Contract
        include Import['repos.date_repo']
        params do
          required(:id).filled(:integer)
        end
      end
    end
  end
end
