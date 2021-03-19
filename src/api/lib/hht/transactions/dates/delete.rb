# frozen_string_literal: true

module Hht
  module Transactions
    module Dates
      class Delete
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'contracts.dates.delete',
          'repos.date_repo',
        ]

        def call(input)
          values = yield validate(input)
          date = yield remove(values)
          Success(date)
        end

        def validate(input)
          delete.call(input).to_monad
        end

        def remove(result)
          resource = date_repo.by_id(result.values.data[:id]).one
          Success(date_repo.by_id(resource[:id]).delete)
        end
      end
    end
  end
end
