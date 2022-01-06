# frozen_string_literal: true

module Hht
  module Repos
    class HabitDateRepo < ROM::Repository[:habit_dates]
      include Import['persistence.container']
      include Dry::Monads[:result]
      commands delete: :by_pk

      def create(attrs)
        tuple = by_attrs(attrs.reject { |k, _v| k == :completed_status })
        if tuple.exist?
          attrs[:completed_status] = 'true'
          return update(attrs)
        end
        Hht::Transactions::HabitDates::Create.new.call(attrs)
      end

      def update(attrs)
        tuple = by_attrs(attrs.reject { |k, _v| k == :completed_status })
        new_status = attrs[:completed_status] == 'true'
        Hht::Transactions::HabitDates::Update.new.call(tuple, new_status)
      end

      def by_attrs(attrs)
        habit_dates.where(attrs)
      end

      def as_json(id)
        habit_date = habit_dates.by_pk(id).one
        {
          'date_id' => habit_date.fetch(:date_id),
          'habit_id' => habit_date.fetch(:habit_id),
          'completed_status' => habit_date.fetch(:completed_status)
        }
      end

      def all_as_json
        { habit_dates: habit_dates_with_dates.order(:h_date).map do |habit_date|
          {
            'date_id' => habit_date.fetch(:date_id),
            'habit_id' => habit_date.fetch(:habit_id),
            'completed_status' => habit_date.fetch(:completed_status)
          }
        end }.to_json
      end

      def habit_dates_with_dates
        habit_dates
          .join(:dates, {id: :date_id}).select
      end

      def query(criteria)
        habit_dates.where(criteria)
      end

      def completed_status_for_query(date_id, habit_id)
        result = query({ date_id: date_id, habit_id: habit_id })
        result.exist? ? result.one.completed_status : nil
      end

      def habit_dates_for_one_habit_node(habit_id)
        date_ids = dates
          .order(:h_date)
          .distinct(:h_date)
          .assoc(:habits)
          .where(habit_id: habit_id)
          .map{|habit| habit[:date_id] }
        
        habit_dates_with_dates
          .where(date_id: date_ids, habit_id: habit_id)
          .order(:h_date)
      end
    end
  end
end
