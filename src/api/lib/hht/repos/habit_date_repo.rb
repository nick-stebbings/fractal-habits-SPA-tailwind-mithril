# frozen_string_literal: true

module Hht
  module Repos
    class HabitDateRepo < ROM::Repository[:habit_dates]
      include Import['persistence.container']
      include Dry::Monads[:result]

      commands :create, delete: :by_pk

      def update(attrs)
        tuple = by_attrs(attrs.reject { |k,v| k == :completed_status })
        new_status = attrs[:completed_status] == 'true'
        tuple.update(completed_status: new_status) #Success() TODO
      end

      def by_attrs(attrs)
        habit_dates.where(attrs)
      end

      def as_json(id)
        habit_date = habit_dates.by_pk(id).one
        { 
          'date_id' => habit_date.fetch(:date_id),
          'habit_id' => habit_date.fetch(:habit_id),
          'completed_status' => habit_date.fetch(:completed_status),
        }
      end

      def all_as_json
        { :habit_dates => habit_dates.order(:date_id).map{ |habit_date|
            {
            'date_id' => habit_date.fetch(:date_id),
            'habit_id' => habit_date.fetch(:habit_id),
            'completed_status' => habit_date.fetch(:completed_status),
            }
          }
        }.to_json
      end

      def query(criteria)
        habit_dates.where(criteria)
      end

      def completed_status_for_query(date_id, habit_id)
        result = query({date_id: date_id, habit_id: habit_id})
        result.exist? ? result.one.completed_status : nil
      end
    end
  end
end
