# frozen_string_literal: true

APP_ROOT = File.expand_path('..', __dir__)
puts "Running in the #{ENV['APP_ENV']} environment."
SINATRA_ACTIVESUPPORT_WARNING=false

require 'bundler'
Bundler.setup(:default, ENV['APP_ENV'])

require 'dotenv'
Dotenv.load(File.join(APP_ROOT, "config", ".env.#{ENV['APP_ENV']}"))