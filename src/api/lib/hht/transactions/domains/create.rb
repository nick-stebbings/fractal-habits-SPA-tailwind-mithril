# frozen_string_literal: true

module Hht
  module Transactions
    module Domains
      class Create
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'contracts.domains.create',
          'repos.domain_repo',
        ]

        def call(input)
          values = yield validate(input)
          domain = yield persist(values)
          Success(domain)
        end

        def validate(input)
          create.call(input).to_monad
        end

        def persist(result)
          Success(domain_repo.domains.insert(result.values.data))
        end
      end
    end
  end
end
