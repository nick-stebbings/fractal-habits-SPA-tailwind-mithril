# frozen_string_literal: true

module Persistence
  module Relations
    class HabitDates < ROM::Relation[:sql]
      schema(:habit_dates) do
        attribute :habit_id, Types::Integer
        attribute :date_id, Types::Integer
        attribute :status_completed, Types::Nominal::Bool

        associations do
          belongs_to :date
          belongs_to :habit
        end
      end

      def all
        habit_dates.to_a
      end
    end
  end
end
