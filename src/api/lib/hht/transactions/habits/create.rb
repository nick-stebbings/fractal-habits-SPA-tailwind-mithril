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
          'repos.date_repo',
          'repos.habit_node_repo',
          'repos.habit_date_repo'
        ]

        def call(input)
          values = yield validate(input)
          habit = yield persist(values)
          Success(habit)
        end

        def validate(input)
          habit_id = input[:parent_node_id]
          domain_root_node = habit_repo.restrict_on_domain_id_combine_with_root_node_of_domain(input[:domain_id])

          # Create a habit_node for this habit but (let root node domain id flag through)
          parent_node_id = habit_repo
          .by_id(habit_id)
          .one
          .habit_node_id
          .to_i unless habit_id.is_a?(String) && (habit_id[0] == 'D') || habit_id == '' || habit_id.nil?

          # It is necessary to create a habit_node and give an id for validation
          parent_id = domain_root_node.exist? ? (parent_node_id || habit_id) : nil
          input[:habit_node_id] =
          habit_node_repo.create(parent_id: parent_id).flatten

          create.call(input).to_monad
        end
        
        def persist(result)
          # Insert the habit, store the ID
          habit_creation = Success(habit_repo.habits.insert(result.values.data))
          habit_id = habit_creation.flatten

          Success([habit_creation])
        end
      end
    end
  end
end
