# frozen_string_literal: true

require_relative 'src/api/system/boot'

require 'rack/cors'

use Rack::Cors do
  allow do
    origins 'localhost:5500', '127.0.0.1:5500'

    # Only allow a request for a specific host
    resource '/api/*',
        methods: [:get, :post, :delete, :put, :patch, :options, :head],
        headers: :any
  end
end

run Hht::Api
