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
          # TODO: Find out why the duplications are happening.
          
          is_valid_input = create.call(input).to_monad
          if(is_valid_input.success?)
            # The date doesn't exist, find out if it will be the oldest date
            oldest = before_records_began?(input)

            # The dates are already persisted
            return is_valid_input if !oldest && input[:h_date].to_time > date_repo.earliest.h_date

            if oldest
              # Formulate strings to be interpolated into raw SQL statement from DateRepo
              sql_query_start_timestamp = (Date.today != input[:h_date]) ? "\'#{input[:h_date]}\' :: timestamptz" : 'DATE_TRUNC(\'day\', NOW())' 
              
              end_point = date_a_day_before_earliest
              sql_query_end_timestamp = end_point ? "\'#{date_a_day_before_earliest}\' :: timestamptz" : 'DATE_TRUNC(\'day\', NOW())' 
              # If the input date is older than the oldest recorded date, 
              # query will fill in from there to the current oldest date, exclusive.
              # Use NOW() as a fallback in case this is the first tuple.
              date_repo.insert_upto_today!(sql_query_start_timestamp, sql_query_end_timestamp)
            else
              date_repo.insert_upto_today!
            end
            is_valid_input
          else
            Failure("Couldn't insert the interim dates.")
          end
        end

        def persist(result)
          Success(date_repo.dates.insert(result.values.to_h))
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
      end
    end
  end
end
