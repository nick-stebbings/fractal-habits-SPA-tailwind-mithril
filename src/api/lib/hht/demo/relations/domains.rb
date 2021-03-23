module Hht
  module Demo
    module Relations
      class Domain < ROM::Relation[:yaml]
        schema(:domains) do
          attribute :id, ROM::Types::String
          attribute :name, ROM::Types::String
          attribute :habits, ROM::Types::Array
        end

        auto_struct true

        def by_name(name)
          restrict(name: name)
        end
      end
    end
  end
end