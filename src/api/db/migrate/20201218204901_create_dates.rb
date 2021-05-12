# frozen_string_literal: true

ROM::SQL.migration do
  change do
    create_table :dates do
      primary_key :id
      column :h_date, DateTime, null: false  # habit_date
    end
  end
end
