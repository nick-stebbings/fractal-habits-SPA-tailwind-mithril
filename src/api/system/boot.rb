# frozen_string_literal: true

ENV['APP_ENV'] ||= 'development'
require_relative '../config/environment'

ENV['HOST']='192.168.99.101'
ENV['PORT']='5432'
ENV['DATABASE_NAME']='sinatra'
ENV['DATABASE_USER']='sinatra'
ENV['DATABASE_PASS']='sinatra'

require_relative 'hht/container'
require_relative 'hht/import'
Hht::Container.finalize!

require_relative 'hht/api'
