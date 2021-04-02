# frozen_string_literal: true

module Hht
  module Repos
    class HabitDateRepo < ROM::Repository[:habit_dates]
      include Import['persistence.container']

      commands :create, delete: :by_pk, update: :by_pk

      def query(criteria)
        habit_dates.where(criteria)
      end

      def completed_status_for_query(date_id, habit_id)
        result = query({date_id: date_id, habit_id: habit_id})
        result.exist? ? result.one.completed_status : nil
      end
    end
  end
end
