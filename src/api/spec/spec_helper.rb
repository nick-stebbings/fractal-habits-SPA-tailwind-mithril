# frozen_string_literal: true

ENV['APP_ENV'] = 'test'
require_relative '../system/boot'
require_relative 'support/db/helpers'

# Require test libraries
require 'rspec'
require 'json_spec'
require 'rack/test'
require 'database_cleaner-sequel'
require 'factory_bot'
require 'faker'

RSpec.configure do |config|
  config.include Rack::Test::Methods
  config.include Test::DatabaseHelpers
  config.include FactoryBot::Syntax::Methods
  config.include JsonSpec::Helpers
  config.include Hht::Import[
    'repos.domain_repo',
    'repos.habit_node_repo',
  ]
  
  Faker::Config.random = Random.new(42)

  config.backtrace_exclusion_patterns = [
    /\/lib\d*\/ruby\//,
    /bin\//,
    /gems/,
    /spec\/spec_helper\.rb/,
    /lib\/rspec\/(core|expectations|matchers|mocks)/
  ]

  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups

  config.before(:suite) do
    FactoryBot.find_definitions
    DatabaseCleaner[:sequel].clean_with(:truncation)
  end

  config.before(:each) do
    DatabaseCleaner[:sequel].strategy = :truncation
    DatabaseCleaner[:sequel].start
  end

  config.after(:each) do
    DatabaseCleaner[:sequel].clean
  end
end

RSpec::Matchers.define(:return_success_monad) do
  match do |result|
    result.is_a?(Test::DatabaseHelpers.success)
  end
end

RSpec::Matchers.define(:return_failure_monad) do
  match do |result|
    result.is_a?(Test::DatabaseHelpers.failure)
  end
end

RSpec::Matchers.define(:return_validation_failure) do
  match do |result|
    return_validation_failure(result)
  end
end
