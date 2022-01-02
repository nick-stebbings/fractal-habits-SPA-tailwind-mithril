# frozen_string_literal: true

module Persistence
  module Relations
    class HabitDates < ROM::Relation[:sql]
      schema(:habit_dates) do
        attribute :habit_id, Types::Integer
        attribute :date_id, Types::Integer
        attribute :completed_status, Types::Nominal::Bool
        primary_key :habit_id, :date_id

        associations do
          belongs_to :date
          belongs_to :habit
        end
      end
    end
  end
end
