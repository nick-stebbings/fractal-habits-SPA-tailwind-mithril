# frozen_string_literal: true

module Persistence
  module Relations
    class Domains < ROM::Relation[:sql]
      schema(:domains) do
        attribute :id, Types::Integer
        attribute :name, Types::String
        attribute :description, Types::String
        attribute :rank, Types::Integer
        attribute :hashtag, Types::String
        primary_key :id

        associations do
          has_many :habits
        end
      end

      def all
        domains.to_a
      end
    end
  end
end
