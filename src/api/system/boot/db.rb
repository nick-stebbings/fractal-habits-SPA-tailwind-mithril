# frozen_string_literal: true

Hht::Container.boot(:db, namespace: true) do
  init do
    require 'rom'
    require 'rom-sql'

    options = {
      adapter: :postgres,
      # host: ENV['HOST'],
      port: ENV['PORT'],
      database: ENV['DATABASE_NAME'],
      user: ENV['DATABASE_USER'],
      password: ENV['DATABASE_PASS'],
      extensions: %i[pg_timestamptz]
    }

    register('options', options)
    connection = Sequel.connect(options)
    register('connection', connection)
    register('config', ROM::Configuration.new(:sql, connection))
  end
end
