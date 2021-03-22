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
          create.call(input).to_monad
        end

        def persist(result)
          date = result[:h_date]
          # Find out if it will be the oldest date:
          oldest = before_records_began?(result)
          return Success('The necessary dates are already persisted.') if !oldest && date.to_time > date_repo.earliest.h_date
          # Return if the dates are already persisted

          begin
            oldest ? date_repo.send("insert_upto_today!", sql_query_start_timestamp(date), sql_query_end_timestamp(date)) : date_repo.insert_upto_today!
            Success('Dates were inserted with raw SQL')
          rescue => e
            Failure(e)
          end
        end

        private

        def before_records_began?(date)
          first_record = date_repo.earliest
          !first_record || date[:h_date].to_time < first_record[:h_date]
        end

        def date_a_day_before_earliest
          first_recorded = date_repo.earliest
          first_recorded ? first_recorded.h_date.to_date - 1 : nil
        end

        def sql_query_start_timestamp(date)
          Date.today != date ? "\'#{date}\' :: timestamptz" : 'DATE_TRUNC(\'day\', NOW())' 
        end

        def sql_query_end_timestamp(date)
          # If the input date is older than the oldest recorded date,
          # query will fill in from there to the current oldest date, exclusive.
          # Use NOW() as a fallback in case this will be the first tuple.
          end_point = date_a_day_before_earliest
          sql_query_end_timestamp = end_point ? "\'#{date_a_day_before_earliest}\' :: timestamptz" : 'DATE_TRUNC(\'day\', NOW())'
        end
      end
    end
  end
end
