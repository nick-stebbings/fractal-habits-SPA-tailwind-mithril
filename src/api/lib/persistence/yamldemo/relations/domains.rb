# frozen_string_literal: true
module Yamldemo
  module Relations
    class Domains < ROM::Relation[:yaml]
      auto_struct true
      schema(:domains) do
        attribute :id, ROM::Types::String
        attribute :name, ROM::Types::String
        attribute :habits, ROM::Types::Array
      end
    end
  end
end
