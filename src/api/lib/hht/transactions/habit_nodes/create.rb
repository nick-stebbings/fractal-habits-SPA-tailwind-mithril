# frozen_string_literal: true

module Hht
  module Transactions
    module HabitNodes
      class Create
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'contracts.habit_nodes.create',
          'repos.habit_node_repo',
        ]

        def call(input)
          values = yield validate(input)
          habit_node = yield persist(values)
          Success(habit_node)
        end

        def validate(input)
          create.call(input).to_monad
        end

        def persist(result)
          parent_id = result.values.data[:parent_id]
          if parent_id.nil? # i.e. it is a new root node
            Success(habit_node_repo.create(root_node_attributes))
          else
            siblings = habit_node_repo.children_of_parent(parent_id).to_a
            # Find siblings to append after, else append after parent.
            rgt = !siblings.empty? ? siblings.last.rgt :  (habit_node_repo.by_id(parent_id).one.rgt - 1)
            modified = habit_node_repo.modify_nodes_after(rgt, :add, parent_id)
            modified ? Success(habit_node_repo.create(modified)) : Failure('Could not modify other nodes. Cannot create new node.')
          end
        end

        def root_node_attributes()
          { 
            parent_id: nil,
            lft: 1,
            rgt: 2
          }
        end
      end
    end
  end
end
