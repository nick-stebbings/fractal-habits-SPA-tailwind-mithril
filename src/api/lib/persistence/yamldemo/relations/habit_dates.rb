  module Yamldemo
    module Relations
      class HabitDates < ROM::Relation[:yaml]
        auto_struct true

        schema(:habit_dates) do
          attribute :habit_id, Types::Integer
          attribute :date_id, Types::Integer
        end
      end
    end
  end
