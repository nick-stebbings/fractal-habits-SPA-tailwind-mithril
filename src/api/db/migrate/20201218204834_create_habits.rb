# frozen_string_literal: true

ROM::SQL.migration do
  change do
    create_table :habits do
      primary_key :id
      column :name, String, size: 50, null: false
      column :description, String, size: 80
      column :initiation_date, DateTime, null: false

      foreign_key :domain_id, :domains, foreign_key_constraint_name: 'fk_domain_habit', on_delete: :cascade
      foreign_key :habit_node_id, :habit_nodes, foreign_key_constraint_name: 'fk_habit_habit_node', on_delete: :cascade
    end
  end
end
