# frozen_string_literal: true

APP_ROOT = File.expand_path('..', __dir__)
puts "Running in the #{ENV['APP_ENV']} environment."

require 'bundler'
Bundler.setup(:default, ENV['APP_ENV'])

require 'dotenv'
Dotenv.load("./.env.#{ENV['APP_ENV']}")
