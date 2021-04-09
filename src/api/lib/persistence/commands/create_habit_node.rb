# frozen_string_literal: true

module Persistence
  module Commands
    class AppendHabitNode < ROM::Commands::Create[:sql]
      relation :habit_nodes
      register_as :create
      result :one
    end
  end
end
