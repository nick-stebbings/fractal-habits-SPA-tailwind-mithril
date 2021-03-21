# frozen_string_literal: true

module Hht
  module Transactions
    module Dates
      class Create
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'contracts.dates.create',
          'repos.date_repo',
        ]

        def call(input)
          values = yield validate(input)
          date = yield persist(values)
          Success(date)
        end

        def validate(input)
          binding.pry
          is_valid = create.call(input).to_monad
          if(is_valid.success?)
            before_records_began(input) ? date_repo.insert_upto_today(input[:h_date]) :  date_repo.insert_upto_today
            Success("Dates inserted upto current habit tracking day.")
          else
            Failure("Couldn't insert the interim dates.")
          end
        end

        def persist(result)
          Success(date_repo.dates.insert(result.values.data))
        end

        # private

        def before_records_began(date)
          test_date = {h_date: Date.new(*date_repo.parse(date))}
          test_date[:h_date].to_time < date_repo.earliest[:h_date]
        end
      end
    end
  end
end
