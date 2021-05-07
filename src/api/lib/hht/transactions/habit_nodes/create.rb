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
          old_root = nil
          prepended_node = nil

          if parent_id.is_a?(String)
            old_root = habit_node_repo.habit_node.root_id_of_domain(parent_id[1..-1].to_i)
            prepended_node = true
            parent_id = nil
          end
          binding.pry
          if parent_id.nil? # i.e. it is a new root node
            inserted = habit_node_repo.habit_nodes.insert(root_node_attributes)
            binding.pry
            # TODO: make new node a parent of old root_node.. old_root.update(parent_id:)
            # TODO: update ALL other nodes lft/rgt values to be one greater.
            Success(inserted)
          else
            siblings = habit_node_repo.habit_nodes.children_of_parent(parent_id).to_a
            # Find siblings to append after, else append after parent.
            rgt = !siblings.empty? ? siblings.last.rgt :  (habit_node_repo.by_id(parent_id).one.rgt - 1)
            modified = habit_node_repo.modify_nodes_after(rgt, :add, parent_id)
            modified ? Success(habit_node_repo.habit_nodes.insert(modified)) : Failure('Could not modify other nodes. Cannot create new node.')
          end
        end
        
        private

        def root_node_attributes
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
