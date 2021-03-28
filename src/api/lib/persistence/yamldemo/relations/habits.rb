# frozen_string_literal: true
module Yamldemo
  module Relations
    class Habits < ROM::Relation[:yaml]
      # struct_namespace Entities
      schema(:habits) do
        attribute :id, Types::Integer
        attribute :name, Types::String
        attribute :domain_id, Types::Integer
        attribute :habit_node_id, Types::Integer
      end
    end
  end
end
