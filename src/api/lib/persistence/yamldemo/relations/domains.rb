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

      def by_id(id)
        domains.to_a.select{|d| d.to_h[:id] == id }.first
      end

      def to_habit_trees
        domains.to_a.map { |d| d[:habits][0] }
      end

      def without_habit_trees
        domains.to_a.map{|d| d.to_h.select { |k, v| (k== :id )||(k== :name ) }}
      end
    end
  end
end
