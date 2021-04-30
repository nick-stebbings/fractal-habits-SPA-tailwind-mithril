# frozen_string_literal: true

require 'sinatra/base'
require 'sinatra/namespace'
require 'sinatra/reloader'
require 'sinatra/cross_origin'
require 'sinatra/json'
require 'multi_json'
require 'dry-validation'
require 'dry-schema'

require_relative 'container'
require File.join(APP_ROOT, 'lib', 'subtree')
require File.join(APP_ROOT, 'lib', 'yaml_store')

module Hht
  YAML = YAMLStore.new

  class Api < Sinatra::Base
    before do
      content_type :json
    end

    configure :development, :test do
      register Sinatra::Reloader
      set :protection, :except => :json_csrf
    end

    configure do
      set :root, APP_ROOT
      register Sinatra::Namespace
      register Sinatra::CrossOrigin
      enable :cross_origin
      set :allow_origin, :any
      set :allow_methods, [:get, :post, :options, :delete, :put, :patch]
      set :allow_credentials, true
      set :max_age, "1728000"
      set :expose_headers, ['Content-Type']
    end

    options '*' do
      response.headers["Allow"] = "GET, POST, OPTIONS, DELETE, PUT, PATCH"
      response.headers["Access-Control-Allow-Origin"] = 'http://localhost:8080'
      response.headers["Access-Control-Allow-Headers"] = "Content-Type, Accept"
      200
    end

    def unwrap_validation_error(failure_monad)
      failure_monad.failure.errors.to_h.values[0][0]
    end

    def validate_form(form_attrs)
      validator = Dry::Schema.Params do
        required(:date_id).filled(:int?)
        required(:habit_id).filled(:int?)
        required(:completed_status).filled(:completed_status?)
      end
      # TODO ['TrueClass', 'FalseClass'].include? JSON.parse(value).class.name
      validator.call(form_attrs)
    end

    include Import[
      'repos.domain_repo',
      'repos.habit_node_repo',
      'repos.habit_repo',
      'repos.date_repo',
      'repos.habit_date_repo',
      'yaml.yaml_container' # For the 'dummy data' Yaml loader
    ]

    namespace '/api' do
      [:get, :post, :put, :patch, :delete].each do |method|
        send(method, '') do
          halt(405, { message:'Verb Not Permitted'}.to_json)
        end
      end
    end

    namespace '/api/demo' do
      get '' do
        length = params['tracking_length'].to_i
        YAMLStore.ready ? YAMLStore.get_data : (YAML = YAMLStore.new(length))
        demo_data_payload = YAMLStore.get_data
        status 200
        json demo_data_payload
      end
      
      get '/domain/:id/habit_tree' do |id|
        date_id = params[:date_id].to_i
        length = params['tracking_length'].to_i || 28
        unless YAMLStore.ready
          YAML = YAMLStore.new(length)
        end
        tree_index = id ? (id.to_i - 1) : 0
        # Return a default template (given all are the same length) if there isn't a tree for that date
        YAML.tree[tree_index][date_id.to_s] || YAML.tree[tree_index][:default]
      end

      put '/domains/:domain_id/habit_dates/:date_id/' do |domain_id, date_id|
        dom_id = domain_id.to_i
        date_id = date_id.to_i

        habit_date = MultiJson.load(request.body.read, :symbolize_keys => true)
        habit_date[:completed_status] = habit_date[:completed_status] == 'true'
        attrs = habit_date.reject { |k,v| k == :completed_status }
        # TODO validation
        habit_dates = YAMLStore.ready ? YAML.habit_dates : YAMLStore.new.habit_dates
        found = habit_dates.by_attrs(attrs).one
        if found
          habit_dates.insert(habit_date)
          habit_dates.delete(found)
        end
        
        YAML.replace_tree!(dom_id - 1, date_id, habit_date, attrs)
        204
      end

      [:post, :patch, :delete].each do |method|
        send(method, '') do
          halt(405, { message:'Verb Not Permitted'}.to_json)
        end
      end
    end

    namespace '/api/habit_trees/nodes' do
      get '' do
        nodes_list = habit_node_repo.all_as_json
        halt(404, { message:'No Nodes Found'}.to_json) unless nodes_list
        status 200
        json nodes_list
      end

      post '' do
        habit_node = MultiJson.load(request.body.read, :symbolize_keys => true)

        created = habit_node_repo.create(habit_node)
        if created.success?
          url = "http://localhost:9393/habit_trees/nodes/#{created.flatten}"
          response.headers['Location'] = url
          status 204
        end
      end

      get '/:node_id' do |node_id|
        habit_node = habit_node_repo.as_json(node_id)
        halt(404, { message:'Node Not Found'}.to_json) unless habit_node
        status 200
        json habit_node
      end

      put '/:node_id' do |node_id|
        habit_node = MultiJson.load(request.body.read, :symbolize_keys => true)
        # TODO: Use contract to verify payload
        #       MODIFIED PREORDER TRAVERSAL

        existing_node = habit_node_repo.as_json(node_id)
        existing_node ? habit_node_repo.update(node_id, habit_node) : habit_node_repo.create(node_id, habit_node)

        status existing_node ? 204 : 201
      end

      patch '/:node_id' do |node_id|
        habit_node_client = MultiJson.load(request.body.read, :symbolize_keys => true)
        habit_node_server = habit_node_repo.as_json(node_id)
        halt(404, { message:'Node Not Found'}.to_json) unless habit_node_server

        # TODO: Use contract to verify payload
        #       MODIFIED PREORDER TRAVERSAL

        habit_node_client.each do |key, value|
          habit_node_server[key.to_sym] = value
        end
        habit_node_repo.update(node_id, habit_node_server)
        status 204
      end

      delete '/:node_id' do |node_id|
        node = habit_node_repo.as_json(node_id)
        halt(404, { message:'Node Not Found'}.to_json) unless node

        habit_node_repo.delete({ id: node_id.to_i})
        status 204
      end
    end

    namespace '/api/habit_trees' do
      [:put, :patch, :delete].each do |method|
        send(method, '') do
          halt(405, { message:'Verb Not Permitted'}.to_json)
        end
      end

      # Get root node tree for domain for specific date
      get '' do
        dom_id = params[:domain_id].to_i
        date_id = params[:date_id].to_i
        
        unless params[:demo] == 'true'
          root_node = habit_node_repo.habit_nodes.root_id_of_domain(dom_id)
          root_node.exist? ? (tree= Subtree.generate(root_node.to_a.first.id, date_id)) : (halt(404, { message:'No nodes for this domain'}.to_json))
          status 200
          tree.to_d3_json
        end
      end

      post '' do
        halt(405, { message:'A habit tree is a composition of habit nodes, to create one use node parent/child references'}.to_json)
      end

      # Get subtree by root node id
      get '/:root_id' do |root_id|
        date_id = params[:date_id].to_i
        tree = Subtree.generate(root_id, date_id)
        status tree ? 200 :  halt(404, { message:'No habit data found!'}.to_json)
        return tree.to_d3_json if tree
      end
    end

    namespace '/api/domains' do
      get '' do
        domain_list = domain_repo.all_as_json
        halt(404, { message:'No Domains Found'}.to_json) unless domain_list

        status 200
        json domain_list
      end
        
      get '/:domain_id' do |id|
        status 200
        json domain_repo.as_json(id)
      end
        
      get '/:domain_id/habits' do |id|
        status 200
        habits = domain_repo
          .by_id_nest_with_habits(id)
          .one.habits
          .map(&:to_h)
        json ({ habits: habits }.to_json)
      end
  
      post '' do
        domain = MultiJson.load(request.body.read, :symbolize_keys => true)
        created = domain_repo.create(domain)
        body = created.success? ? JSON.generate({id: created.flatten.to_s}) : ''
        created.success? ? (status 201) : halt(400, { message: unwrap_validation_error(created)}.to_json)
        body
      end

      put '/:domain_id' do |id|
        domain = MultiJson.load(request.body.read, :symbolize_keys => true)
        existing = domain_repo.by_id(id)
        halt(404, { message:'Domain Not Found'}.to_json) unless existing

        updated = domain_repo.update(id, domain)
        if updated.success?
          url = "http://localhost:9393/domains/#{id}"
          response.headers['Location'] = url
          status 204
        else
          halt(422, { message: unwrap_validation_error(updated)}.to_json)
        end
      end

      patch '/:domain_id' do |id|
        domain_client = MultiJson.load(request.body.read, :symbolize_keys => true)
        domain_server = domain_repo.as_json(id)
        halt(404, { message:'Domain Not Found'}.to_json) unless domain_server
        
        domain_client.each { |key, value| domain_server[key.to_sym] = value }
        updated = domain_repo.update(id, domain_server)

        if updated.success?
          url = "http://localhost:9393/domains/#{id}"
          response.headers['Location'] = url
          status 204
        else
          halt(422, { message: unwrap_validation_error(updated)}.to_json)
        end
      end

      delete '/:domain_id' do |id|
        domain = domain_repo.as_json(id)
        halt(404, { message:'Domain Not Found'}.to_json) unless domain

        domain_repo.delete(id.to_i)
        status 204
      end
    end

    namespace '/api/habits' do
      get '' do
        habit_list = habit_repo.all_as_json
        halt(404, { message:'No Habits Found'}.to_json) unless habit_list

        status 200
        json habit_list
      end

      get '/:habit_id' do |id|
        status 200
        json habit_repo.as_json(id)
      end

      post '' do
        habit = MultiJson.load(request.body.read, :symbolize_keys => true)
        created = habit_repo.create(habit)
        body = created.success? ? JSON.generate({id: created.flatten.to_s}) : ''
        created.success? ? (status 201) : halt(400, { message: unwrap_validation_error(created)}.to_json)
        body
      end

      delete '/:habit_id' do |id|
        habit = habit_repo.as_json(id)
        halt(404, { message:'Habit Not Found'}.to_json) unless habit

        habit_repo.delete(id.to_i)
        status 204
      end
    end
    
    namespace '/api/dates' do
      get '' do
        date_list = date_repo.all_as_json
        halt(404, { message:'No Dates Found'}.to_json) unless date_list
        
        status 200
        json date_list
      end
        
      get '/:date_id' do |id|
        status 200
        json date_repo.as_json(id)
      end
      
      post '' do
        date = MultiJson.load(request.body.read, :symbolize_keys => true)
        created = date_repo.create(date)
        
        if created.success?
          url = "http://localhost:9393/dates/#{created.flatten}"
          response.headers['Location'] = url
          status 204
        else
          halt(400, { message: unwrap_validation_error(created)}.to_json)
        end
      end
    end

    namespace '/api/habit_dates' do
      get '' do
        habit_date_list = habit_date_repo.all_as_json
        halt(404, { message:'No Dates Found'}.to_json) unless habit_date_list
        
        status 200
        json habit_date_list
      end

      post '' do
        habit_date = MultiJson.load(request.body.read, :symbolize_keys => true)
        created = habit_date_repo.create(habit_date)
        created.success? ? 204 : 
          halt(422, { message: unwrap_validation_error(created)}.to_json)
      end

      put '/' do
        habit_date = MultiJson.load(request.body.read, :symbolize_keys => true)
        attrs = habit_date.reject { |k,v| k == :completed_status }
        # binding.pry
        halt(404, { message:'Habit Date Not Found'}.to_json) unless habit_date_repo.by_attrs(attrs).exist?
        updated = habit_date_repo.update(habit_date)
        updated ? 204 : 
          halt(422, { message: unwrap_validation_error(updated)}.to_json)
      end
    end
  end
end
