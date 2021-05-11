# frozen_string_literal: true

module Yamldemo
  module Relations
    class Habits < ROM::Relation[:yaml]
      schema(:habits) do
        attribute :id, Types::Integer
        attribute :name, Types::String
        attribute :domain_id, Types::Integer
        attribute :initiation_date, Types::Nominal::DateTime
        # attribute :habit_node_id, Types::Integer
        def by_name(name)
          habits.to_a.select { |h| h[:name] == name }
        end
      end
    end
  end
end
