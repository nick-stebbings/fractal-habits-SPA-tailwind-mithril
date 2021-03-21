# frozen_string_literal: true

module Hht
  module Repos
    class HabitRepo < ROM::Repository[:habits]
      include Import['persistence.container']
      struct_namespace Entities

      commands update: :by_pk

      def create(data)
        binding.pry
        Hht::Transactions::Habits::Create.new.call(data)
      end

      def delete(pk)
        Hht::Transactions::Habits::Delete.new.call(pk)
      end

      def query(conditions); habits.where(conditions); end

      def ids
        habits.pluck(:id)
      end

      def by_id(id)
        habits.by_pk(id)
      end

      def as_json(id)
        habit = habits.by_pk(id).one
        { 
          'id' => habit.fetch(:id),
          'name' => habit.fetch(:name),
          'description' => habit.fetch(:description),
          'initiation_date' => habit.fetch(:initiation_date),
          'domain_id' => habit.fetch(:domain_id),
          'habit_node_id' => habit.fetch(:habit_node_id),
        }
      end

      def all_as_json
        { :habits => habits.all }.to_json
      end

      def restrict_on_domain_id_combine_with_root_node_of_domain(domain_id)
        habits
          .combine(:habit_nodes)
          .node(:habit_node) { |hn| hn.where(lft: 1) }
          .where{ domain_id == domain_id && habit_node.nil? }
      end
    end
  end
end
