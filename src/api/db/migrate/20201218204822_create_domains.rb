# frozen_string_literal: true

ROM::SQL.migration do
  change do
    create_table :domains do
      primary_key :id
      column :name, String
      column :description, String
      column :rank, Integer
      column :hashtag, String
    end
  end
end
