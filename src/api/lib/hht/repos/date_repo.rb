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
      include Import[
        'persistence.container',
        'db.connection',
        'repos.habit_date_repo',
        'repos.habit_repo']
      include Dry::Monads[:result]

      commands update: :by_pk

      def create(data, insert_all_habit_dates = true)
        date_creation = Hht::Transactions::Dates::Create.new.call({h_date: Date.new(*parse(data))})
        # When creating dates we also need to create habit_dates for those dates:
        created_date_ids = date_creation.success? ? date_creation.flatten : []
        habit_date_monads = []

        if insert_all_habit_dates
          created_date_ids.each do |date_id|
            habit_repo.ids.each do |habit_id|
              new_habit_date = {habit_id: habit_id, date_id: date_id, completed_status: 'f'}
              habit_date_monads << Hht::Transactions::HabitDates::Create.new.call(new_habit_date)
            end
          end
        end
        Success(habit_date_monads << date_creation)
      end

      def delete(pk)
        Hht::Transactions::Dates::Delete.new.call(pk)
      end

      def by_id(id); dates.by_pk(id); end

      def find(given_date); dates.where(h_date: given_date); end

      def earliest; dates.order(:h_date).first; end

      def latest; dates.order(:h_date).last; end

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
        current_latest = latest

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
        connection.run(query)

        # Return the ids of the new dates
        all_after(current_latest.h_date).map(:id)[1..-1]
      end
    end
  end
end