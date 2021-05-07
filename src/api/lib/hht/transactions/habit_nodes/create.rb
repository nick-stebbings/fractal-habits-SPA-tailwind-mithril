# frozen_string_literal: true

module Hht
  module Transactions
    module HabitNodes
      class MpttChangeset < ROM::Changeset::Update
        map do |tuple|
          tuple.merge({lft: tuple[:lft]+1, rgt: tuple[:rgt]+1})
        end
      end

      class Create
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'contracts.habit_nodes.create',
          'repos.habit_node_repo',
        ]
        
        def call(input)
          @@habit_node_relation = habit_node_repo.habit_nodes

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
            binding.pry
            old_root = @@habit_node_relation.root_id_of_domain(parent_id[1..-1].to_i).one
            prepended_node = true
            parent_id = nil
          end
          if parent_id.nil? # i.e. it is a new root node
            increment_all_non_root_mptt_values_by_one
            binding.pry
            
            inserted = @@habit_node_relation.insert(root_node_attributes(old_root))
            
            habit_node_repo
              .by_id(old_root.id)
              .update(parent_id: inserted) if prepended_node
            binding.pry
            Success(inserted)
          else
            siblings = @@habit_node_relation.children_of_parent(parent_id).to_a
            # Find siblings to append after, else append after parent.
            rgt = !siblings.empty? ? siblings.last.rgt :  (habit_node_repo.by_id(parent_id).one.rgt - 1)
            modified = habit_node_repo.modify_nodes_after(rgt, :add, parent_id)
            modified ? Success(@@habit_node_relation.insert(modified)) : Failure('Could not modify other nodes. Cannot create new node.')
          end
        end

        private

        def increment_all_non_root_mptt_values_by_one
          @@habit_node_relation.map do |relation|
            changeset = @@habit_node_relation.changeset(MpttChangeset, relation.to_h)
            habit_node_repo.update(changeset[:id], changeset.to_h)
            puts 'success!'
          end
        end

        def root_node_attributes(old_root)
          !old_root ? { 
            parent_id: nil,
            lft: 1,
            rgt: 2
          } : {
            parent_id: nil,
            lft: 1,
            rgt: (old_root.rgt + 2)
          }
        end
      end
    end
  end
end
