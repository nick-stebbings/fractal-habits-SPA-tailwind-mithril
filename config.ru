#\ -s Puma -p 7001
# frozen_string_literal: true

require_relative 'src/api/system/boot'

# use Rack::Cors do
#   allow do
#     origins 'http://127.0.0.1:5500', 'http://127.0.0.1:8080', 'http://localhost:8080'
#     resource '/api/*',
#       expose: ['Location', 'Uid'],
#         methods: [:get, :post, :delete, :put, :patch, :options, :head],
#         headers: :any
#   end
# end

run Hht::Api
