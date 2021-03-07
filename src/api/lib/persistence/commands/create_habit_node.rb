# frozen_string_literal: true

module Persistence
  module Commands
    class CreateHabitNode < ROM::SQL::Commands::Create[:sql]
      relation :habit_nodes
      register_as :create
      result :one
    end

    class DeleteHabitNode < ROM::SQL::Commands::Delete[:sql]
      relation :habit_nodes
      register_as :delete_one
      result :one
    end
  end
end
