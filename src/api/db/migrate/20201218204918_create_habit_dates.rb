# frozen_string_literal: true

ROM::SQL.migration do
  change do
    create_table :habit_dates do
      Integer :habit_id
      Integer :date_id
      column :completed_status, TrueClass

      primary_key %i[habit_id date_id], name: 'pk_habit_date'
      foreign_key [:habit_id], :habits, name: 'fk_habit_date_habit'
      foreign_key [:date_id], :dates, name: 'fk_habit_date_date'
    end
  end
end
