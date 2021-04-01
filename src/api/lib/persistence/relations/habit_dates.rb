# frozen_string_literal: true

module Persistence
  module Relations
    class HabitDates < ROM::Relation[:sql]
      schema(:habit_dates) do
        attribute :habit_id, Types::Integer
        attribute :date_id, Types::Integer
        attribute :completed_status, Types::Nominal::Bool

        associations do
          belongs_to :date
          belongs_to :habit
        end
      end

      def completed_status_for_query(date_id, habit_id)
        result = where({date_id: date_id, habit_id: habit_id})
        result.exist? ? result.one.completed_status : nil
      end
    end
  end
end
