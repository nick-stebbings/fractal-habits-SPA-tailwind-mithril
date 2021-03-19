# frozen_string_literal: true

module Hht
  module Transactions
    module Domains
      class Delete
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'contracts.domains.delete',
          'repos.domain_repo',
        ]

        def call(input)
          values = yield validate(input)
          domain = yield remove(values)
          Success(domain)
        end

        def validate(input)
          delete.call(input).to_monad
        end

        def remove(result)
          resource = domain_repo.by_id(result.values.data[:id]).one
          Success(habit_node_repo.by_id(resource[:id]).delete)
        end
      end
    end
  end
end
