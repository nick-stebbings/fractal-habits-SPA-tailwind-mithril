# frozen_string_literal: true

DATE_INSERTION_STARTPOINT = <<-SQL.chomp
  SELECT
    (h_date + '1 day' :: interval)
  FROM
    last_date_entry
SQL
module Hht
  module Repos
    class DateRepo < ROM::Repository[:dates]
      include Import['persistence.container', 'db.connection']

      commands update: :by_pk

      def create(data)
        Hht::Transactions::Dates::Create.new.call({h_date: Date.new(*parse(data))})
      end

      def delete(pk)
        Hht::Transactions::Dates::Delete.new.call(pk)
      end

      def by_id(id); dates.by_pk(id); end

      def find(given_date); dates.where(h_date: given_date); end

      def earliest; dates.order(:h_date).first; end

      def all_after(given_date); dates.where{ h_date >= given_date }; end

      def as_json(id)
        date = dates.by_pk(id).one
        { 
          'id' => date.fetch(:id),
          'h_date' => date.fetch(:h_date), # habit_date
        }
      end

      def all_as_json
        { :dates => dates.order(:h_date).map{ |date|
            { 
            'id' => date.fetch(:id),
            'h_date' => date.fetch(:h_date), # habit_date
            }
          }
        }.to_json
      end

      def parse(input)
        input[:h_date].split("-").map(&:to_i)
      end

      def insert_upto_today!(start_date = DATE_INSERTION_STARTPOINT, end_date = 'NOW()')
        query = <<-SQL.chomp
          WITH last_date_entry AS (
          SELECT
            DISTINCT h_date
          FROM
            dates
          ORDER BY h_date DESC
          LIMIT 1
          ),
          series AS (
            SELECT generate_series(
              (
                #{start_date}
              ),
              #{end_date},
              '1 day' :: interval
            )
          )
          INSERT INTO
            dates (h_date)
          SELECT
            generate_series
          FROM
            series
          WHERE NOT EXISTS
            (
              SELECT h_date
              FROM dates as d
              WHERE d.h_date IN (SELECT generate_series FROM series)
            );
        SQL
        puts query
        connection.run(query)
      end
    end
  end
end