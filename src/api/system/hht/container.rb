# frozen_string_literal: true

require 'dry/system/container'
require 'dry/system/components'

module Hht
  class Container < Dry::System::Container
    configure do
      config.name = :hht

      config.root = APP_ROOT
      config.default_namespace = 'hht'
      config.auto_register = %w[lib/hht]
    end

    load_paths! 'lib'
  end
end
