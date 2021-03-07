# frozen_string_literal: true

module Hht
  module Transactions
    module HabitNodes
      class Delete
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'contracts.habit_nodes.delete',
          'repos.habit_node_repo',
        ]

        def call(input)
          values = validate(input)
          if values.is_a? Success
            habit_node = remove(values.flatten)
            Success(habit_node)
          elsif values.is_a? Failure(Dry::Validation::Result)
            return values
          end
        end

        def validate(input)
          delete.call(input).to_monad
        end

        def remove(result)
          parent_id = result.values.data[:parent_id]
          if parent_id.nil? # i.e. it is a root node
            Success(habit_node_repo.delete_one(result[:id]))
          else
            rgt = result.values[:rgt]
            modified = habit_node_repo.modify_nodes_after(rgt, :del, parent_id)
            modified ? Success(habit_node_repo.delete(result.values[:id])) : Failure('Could not modify other nodes. Cannot delete node.')
          end
        end
      end
    end
  end
end
