# frozen_string_literal: true
module Hht
  module Transactions
    module Habits
      class Create
        include Dry::Monads[:result]
        include Dry::Monads::Do.for(:call)
        include Import[
          'contracts.habits.create',
          'repos.habit_repo',
          'repos.habit_node_repo'
        ]

        def call(input)
          values = yield validate(input)
          habit = yield persist(values)
          Success(habit)
        end

        def validate(input)
          parent_node_id = input[:habit_node_id];
          domain_root_node = habit_repo.restrict_on_domain_id_combine_with_root_node_of_domain(input[:domain_id]).to_a
          
          # Create a habit_node for this habit 
          # TODO: move this to persist method
          input[:habit_node_id] = habit_node_repo.create(parent_id: (domain_root_node ? nil : parent_node_id)).flatten

          create.call(input).to_monad
        end

        def persist(result)
          Success(habit_repo.habits.insert(result.values.data))
        end
      end
    end
  end
end
