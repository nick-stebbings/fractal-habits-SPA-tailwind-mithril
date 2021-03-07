# frozen_string_literal: true

module Persistence
  module Commands
    class DeleteHabitNode < ROM::Commands::Delete[:sql]
      relation :habit_nodes
      register_as :delete
      result :one
    end
  end
end
