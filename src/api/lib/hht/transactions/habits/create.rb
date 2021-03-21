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
          'repos.habit_node_repo',
        ]

        def call(input)
          values = yield validate(input)
          habit = yield persist(values)
          Success(habit)
        end

        def validate(input)
          parent_node_id = input[:habit_node_id];
          domain_has_root = !!habit_repo.restrict_on_domain_id_combine_with_root_node_of_domain(input[:domain])
          
          input[:habit_node_id] = habit_node_repo.create(domain_has_route ? parent_node_id : nil).flatten

          create.call(input).to_monad
        end

        def persist(result)
          # Check the initiation date
          # If the dates inbetween then and today do not exist, add them.
          Success(habit_repo.habits.insert(result.values.data))
        end
      end
    end
  end
end
