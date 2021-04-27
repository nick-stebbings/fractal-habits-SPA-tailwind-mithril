# frozen_string_literal: true

# Gemfile
source 'https://rubygems.org'
ruby '2.4.1'

gem 'rake'

# Frameworks
gem 'sinatra'
gem 'sinatra-contrib'
gem 'rack-cors'

group :production do
  gem 'puma'
  gem "sinatra-cross_origin"
end

group :development do
  gem 'pry-byebug'
  gem 'racksh'
  gem 'rubocop'
  gem 'shotgun'
end

group :test do
  gem 'database_cleaner-sequel'
  gem 'json_spec'
  gem 'rack-test'
  gem "factory_bot"
  gem 'rspec'
  gem 'multi_json'
  gem 'faker'
  # gem 'fuubar'
  # gem 'webmock'
  # gem 'capybara'
  # gem 'selenium-webdriver',  '~> 3.142', '>= 3.142.2'
end

# Environment
gem 'dotenv'
gem 'dry-system'

# Persistence Layer
gem 'dry-monads'
gem 'dry-validation'
gem 'pg'
gem 'rom'
gem 'rom-sql'
gem 'rom-yaml'

# Data structures
gem 'dry-schema'
gem 'json'
gem 'rubytree'