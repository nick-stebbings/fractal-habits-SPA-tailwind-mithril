# frozen_string_literal: true

ROM::SQL.migration do
  change do
    create_table :habit_nodes do
      primary_key :id
      column :parent_id, Integer, on_delete: :cascade
      column :lft, Integer, null: false
      column :rgt, Integer, null: false
      # column :habit_id, Integer, null: false, on_delete: :cascade

      foreign_key [:parent_id], :habit_nodes, name: 'fk_parent_child_linkage'
    end
  end
end
