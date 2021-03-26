# frozen_string_literal: true

module Hht
  module Repos
    class HabitDateRepo < ROM::Repository[:habit_dates]
      include Import['persistence.container']

      commands :create, delete: :by_pk, update: :by_pk
    end
  end
end
