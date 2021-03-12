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
          values = yield validate(input)
          habit_node = yield remove(values)
          Success(habit_node)
        end

        def validate(input)
          delete.call(input).to_monad
        end

        def remove(result)
          resource = habit_node_repo.by_id(result.values.data[:id]).one  # TODO Change this to be an input later
          parent_id = resource.parent_id
          if !parent_id.nil? # i.e. it is not a root node
            rgt = resource[:rgt]
            modified = habit_node_repo.modify_nodes_after(rgt, :del, parent_id)
          end

          begin
            Success(habit_node_repo.by_id(resource[:id]).delete)
          rescue
            Failure(modified ? 'Modified other nodes but could not delete node.' : 'Did not modify other nodes. Cannot delete node.')
          end
        end
      end
    end
  end
end
