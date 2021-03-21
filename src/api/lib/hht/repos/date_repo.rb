# frozen_string_literal: true

module Hht
  module Repos
    class DateRepo < ROM::Repository[:dates]
      include Import['persistence.container']
      struct_namespace Entities

      commands update: :by_pk

      def create(data)
        date = Date.new(*data[:date].split("-").map(&:to_i))
        Hht::Transactions::Dates::Create.new.call({h_date: date})
      end

      def delete(pk)
        Hht::Transactions::Dates::Delete.new.call(pk)
      end

      def find(given_date); dates.where(h_date: given_date); end

      def as_json(id)
        date = dates.by_pk(id).one
        { 
          'id' => date.fetch(:id),
          'h_date' => date.fetch(:h_date), # habit_date
        }
      end

      def all_as_json
        { :dates => dates.all }.to_json
      end
    end
  end
end
