# frozen_string_literal: true

ENV['APP_ENV'] ||= 'development'
require 'pry' if ENV['APP_ENV'] == 'development'

require_relative '../config/environment'

require_relative 'hht/container'
require_relative 'hht/import'
Hht::Container.finalize!

require_relative 'hht/api'
