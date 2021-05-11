# frozen_string_literal: true

module Hht
  module Contracts
    module HabitNodes
      class Create < Dry::Validation::Contract
        include Import['repos.habit_node_repo']
        params do
          required(:parent_id)
        end

        rule(:parent_id) do
          key.failure('Must not be a string') if (value.is_a? String) && value[0] != 'D'
        end

        rule(:parent_id) do
          unless value.nil? || ((value.is_a? String) && (value[0] == 'D')) || ((value.is_a? Integer) && value.positive?)
            key.failure('Must be a positive integer or NULL')
          end
        end

        rule(:parent_id) do
          unless value.nil? || ((value.is_a? String) && (value[0] == 'D')) || ((value.is_a? Integer) && habit_node_repo.by_id(value).one)
            key.failure('Parent does not exist')
          end
        end
      end
    end
  end
end
