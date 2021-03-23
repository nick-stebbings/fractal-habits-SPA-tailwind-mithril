module Hht
  module Demo
    module Relations
      class Habit < ROM::Relation[:yaml]
        schema(:habits) do
          attribute :id, Types::Integer
          attribute :name, Types::String
        end
      
        auto_struct true
      end
    end
  end
end