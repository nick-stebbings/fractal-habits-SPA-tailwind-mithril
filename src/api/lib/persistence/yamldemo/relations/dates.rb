# frozen_string_literal: true

module Yamldemo
  module Relations
    class Dates < ROM::Relation[:yaml]
      schema(:dates) do
        attribute :id, Types::Integer
        attribute :h_date, Types::DateTime
      end
    end
  end
end
