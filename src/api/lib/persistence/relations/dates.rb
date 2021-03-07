# frozen_string_literal: true

module Persistence
  module Relations
    class Dates < ROM::Relation[:sql]
      schema(:dates) do
        attribute :id, Types::Integer
        attribute :h_date, Types::Nominal::DateTime
        primary_key :id

        associations do
          has_many :habit_dates
          has_many :habits, through: :habit_dates
        end
      end

      def all
        dates.to_a
      end
    end
  end
end
