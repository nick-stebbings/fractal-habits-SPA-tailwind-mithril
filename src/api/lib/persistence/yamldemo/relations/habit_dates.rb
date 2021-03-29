# frozen_string_literal: true
module Yamldemo
  module Relations
    class HabitDates < ROM::Relation[:yaml]
      schema(:habit_dates) do
        attribute :habit_id, Types::Integer
        attribute :date_id, Types::Integer
      end
    end
  end
end
