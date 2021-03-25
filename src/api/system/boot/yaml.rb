# frozen_string_literal: true

Hht::Container.boot(:yaml, namespace: true) do |app|
  init do
    require 'rom'
    require 'rom-yaml'
    
    path = File.join(APP_ROOT, 'lib', 'persistence', 'dummyData.yml')
    config = ROM::Configuration.new(:yaml, path)
    # config.auto_registration(app.root.join('lib/persistence/yamldemo'))
    config.auto_registration(app.root.join('lib/persistence/yamldemo'))

    container = ROM.container(config) do |setup|
      def query(conditions)
        users.where(conditions)
      end
      define(:domains) do
        register_as :entity

        model name: 'Domain'
        attribute :id, Types::Integer
        attribute :name, Types::String

        embedded :habits, type: :hash do
          attribute :name, from: 'name'
        end
      end
    end
    register('config', ROM::Configuration.new(:yaml, path))
    register('container', container)
  end
end
