# frozen_string_literal: true

module Hht
  module Transactions
    module Domains
      class Update
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'contracts.domains.update',
          'repos.domain_repo',
        ]

        def call(input)
          values = yield validate(input)
          domain = yield persist(values)
          Success(domain)
        end

        def validate(input)
          update.call(input).to_monad
        end

        def persist(result)
          Success(domain_repo.domains.update(result.values.data))
        end
      end
    end
  end
end
