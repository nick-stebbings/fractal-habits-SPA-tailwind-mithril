# frozen_string_literal: true

require 'dry/system/container'
require 'dry/system/components'

module Hht
  class Container < Dry::System::Container
    configure do |config|
      config.name = :hht
      config.root = APP_ROOT
      config.component_dirs.default_namespace = "hht"
      config.component_dirs.add "lib"
    end
  end
end
