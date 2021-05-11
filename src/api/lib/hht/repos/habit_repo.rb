# frozen_string_literal: true

module Hht
  module Repos
    class HabitRepo < ROM::Repository[:habits]
      include Import['persistence.container']

      commands update: :by_pk

      def create(data)
        Hht::Transactions::Habits::Create.new.call(data)
      end

      def delete(pk)
        Hht::Transactions::Habits::Delete.new.call(pk)
      end

      def query(conditions)
        habits.where(conditions)
      end

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
          'habit_node_id' => habit.fetch(:habit_node_id)
        }
      end

      def all_as_json
        { habits: ids.map { |id| as_json(id) } }.to_json
      end

      def restrict_on_domain_id_combine_with_root_node_of_domain(domain_id)
        habits
          .where(domain_id: domain_id)
          .combine(:habit_nodes)
          .node(:habit_node) { |hn| hn.where(lft: 1) }
          .where { !habit_node.nil? }
      end

      def habit_for_habit_node(habit_node_id)
        habits.join(:habit_nodes, id: :habit_node_id).where(habit_node_id: habit_node_id)
      end
      # TODO: NEEDED?
      # def habit_dates_with_status_completion(completed_string)
      #   habit_dates.join(habits).select(:habit_id, :date_id).where(completed_status: completed_string)
      # end

      # def habit_dates_restrict_on_completion_status_and_date_id(completion_string, date_id)
      #   habit_dates_with_status_completion(completion_string).exists(dates, dates[:id] => habit_dates[:date_id])
      # end
    end
  end
end
