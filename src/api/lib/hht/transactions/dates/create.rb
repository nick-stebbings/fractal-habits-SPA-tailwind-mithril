# frozen_string_literal: true

module Hht
  module Transactions
    module Dates
      class Create
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'contracts.dates.create',
          'repos.date_repo'
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
          if !oldest && date.to_time > date_repo.earliest.h_date
            Success(date_repo.insert_upto_today!)
          else
            begin
              new_date_ids = (if oldest
                                date_repo.send('insert_upto_today!', sql_query_start_timestamp(date),
                                sql_query_end_timestamp(date))
                              else
                                date_repo.insert_upto_today!
                              end)
              Success(new_date_ids)
            rescue StandardError => e
              Failure(e)
            end
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
          Date.today != date ? "\'#{date}\' :: timestamptz" : 'DATE_TRUNC(\'day\', NOW()):: timestamptz'
        end

        def sql_query_end_timestamp(_date)
          # If the input date is older than the oldest recorded date,
          # query will fill in from there to the current oldest date, exclusive.
          # Use NOW() as a fallback in case this will be the first tuple.
          end_point = date_a_day_before_earliest
          sql_query_end_timestamp = end_point ? "\'#{date_a_day_before_earliest}\' :: timestamptz" : 'DATE_TRUNC(\'day\', NOW()):: timestamptz'
        end
      end
    end
  end
end
