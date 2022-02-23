# frozen_string_literal: true

require 'sinatra/base'
require 'sinatra/namespace'
require 'sinatra/reloader'
require 'sinatra/cross_origin'
require 'sinatra/json'
require 'multi_json'

require_relative 'container'
require File.join(APP_ROOT, 'lib', 'subtree')
require File.join(APP_ROOT, 'lib', 'yaml_store')

require 'pry'
module Hht
  YAML = YAMLStore.new # For demo data

  class Api < Sinatra::Base
    before do
      content_type :json
    end

    configure :development, :test do
      register Sinatra::Reloader
      set :protection, except: :json_csrf
    end

    configure do
      set :root, APP_ROOT
      register Sinatra::Namespace
      register Sinatra::CrossOrigin
      enable :cross_origin
      set :allow_methods, %i[get post options delete put patch]
      set :allow_credentials, true
      set :max_age, '1728000'
      set :expose_headers, ['Content-Type']
    end

    before do
      response.headers['Access-Control-Allow-Origin'] = 'https://habfract.life'
    end

    options '*' do
      response.headers['Allow'] = 'GET, POST, OPTIONS, DELETE, PUT, PATCH'
      response.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'
      200
    end

    def unwrap_validation_error(failure_monad)
      failure_monad.failure.errors.to_h.values[0][0]
    end

    def sanitise_values(attrs)
      attrs.transform_values { |v| Rack::Utils.escape_html(v) }
    end

    include Import[
      'repos.domain_repo',
      'repos.habit_node_repo',
      'repos.habit_repo',
      'repos.date_repo',
      'repos.habit_date_repo',
      'yaml.yaml_container' # For the 'dummy data' Yaml loader
    ]

    namespace '/' do
      %i[get post put patch delete].each do |method|
        send(method, '') do
          halt(405, { message: 'Verb Not Permitted' }.to_json)
        end
      end
    end

    namespace '/demo' do
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
        YAML = YAMLStore.new(length) unless YAMLStore.ready
        halt(404, { message: 'No Demo Data Found' }.to_json) unless YAML
        tree_index = id ? (id.to_i - 1) : 0
        # Return a default template (given all are the same length) if there isn't a tree for that date
        YAML.tree[tree_index][date_id.to_s] || YAML.tree[tree_index][:default]
      end

      put '/domains/:domain_id/habit_dates/:date_id/' do |domain_id, date_id|
        dom_id = domain_id.to_i
        date_id = date_id.to_i

        habit_date = MultiJson.load(request.body.read, symbolize_keys: true)
        habit_date[:completed_status] = habit_date[:completed_status] == 'true'
        attrs = habit_date.reject { |k, _v| k == :completed_status }
        # TODO: validation
        habit_dates = YAMLStore.ready ? YAML.habit_dates : YAMLStore.new.habit_dates
        found = habit_dates.by_attrs(attrs).one
        if found
          habit_dates.insert(habit_date)
          habit_dates.delete(found)
        end

        YAML.replace_tree!(dom_id - 1, date_id, habit_date, attrs)
        status 204
      end

      %i[post patch delete].each do |method|
        send(method, '') do
          halt(405, { message: 'Verb Not Permitted' }.to_json)
        end
      end
    end

    namespace '/habit_trees/nodes' do
      get '' do
        nodes_list = habit_node_repo.all_as_json
        halt(404, { message: 'No Nodes Found' }.to_json) unless nodes_list
        status 200
        json nodes_list
      end

      get '/:node_id' do |node_id|
        habit_node = habit_node_repo.as_json(node_id)
        halt(404, { message: 'Node Not Found' }.to_json) unless habit_node
        status 200
        json habit_node
      end

      post '' do
        habit_node = MultiJson.load(request.body.read, symbolize_keys: true)

        created = habit_node_repo.create(habit_node)
        status 204 if created.success?
      end

      put '/:node_id' do |node_id|
        habit_node = MultiJson.load(request.body.read, symbolize_keys: true)
        existing_node = habit_node_repo.as_json(node_id)
        result = if existing_node
            habit_node_repo.update(node_id,
                                  habit_node)
          else
            habit_node_repo.create(node_id, habit_node)
          end

        existing_node ? (status 204) : (status 201; result)
      end

      patch '/:node_id' do |node_id|
        habit_node_client = MultiJson.load(request.body.read, symbolize_keys: true)
        habit_node_server = habit_node_repo.as_json(node_id)
        halt(404, { message: 'Node Not Found' }.to_json) unless habit_node_server

        habit_node_client.each do |key, value|
          habit_node_server[key.to_sym] = value
        end
        habit_node_repo.update(node_id, habit_node_server)
        status 204
      end

      delete '/:node_id' do |node_id|
        node = habit_node_repo.as_json(node_id)
        halt(404, { message: 'Node Not Found' }.to_json) unless node

        deleted = habit_node_repo.delete({ id: node_id.to_i })

        halt(400, { message: unwrap_validation_error(deleted) }.to_json) unless deleted.length > 0
        status 204
      end
    end

    namespace '/habit_trees' do
      %i[put patch delete].each do |method|
        send(method, '') do
          halt(405, { message: 'Verb Not Permitted' }.to_json)
        end
      end

      # Get root node tree for domain for specific date
      get '' do
        dom_id = params[:domain_id].to_i
        date_id = params[:date_id].to_i
        depth = (params[:depth] || 3).to_i

        if params[:demo] == 'true'
          halt(302, { message: 'Use the /demo path for demo data.' }.to_json)
        end

        root_node = habit_node_repo.habit_nodes.root_id_of_domain(dom_id)
        if root_node.exist?
          (tree = Subtree.generate(root_node.to_a.first.id, date_id))
        else
          halt(404,
          { message: 'No nodes for this domain' }.to_json)
        end
        status 200
        tree.to_d3_json(depth)
      end

      # Get root node tree for domain for a week of dates starting with a date_id
      get '/weekly' do
        dom_id = params[:domain_id].to_i
        start_date_id = params[:start_date_id].to_i
        depth = (params[:depth] || 3).to_i

        if params[:demo] == 'true'
          halt(302, { message: 'Use the /demo path for demo data.' }.to_json)
        end
        
        root_node = habit_node_repo.habit_nodes.root_id_of_domain(dom_id)
        trees = {}
        start_date_id = [start_date_id, 1].max
        if root_node.exist?
          root_id = root_node.to_a.first.id
          start_date_id.upto(start_date_id + 6) { |date_id| 
            trees[date_id] = Subtree.generate(root_id, date_id).to_d3_json(depth)
          }
        else
          halt(404,
          { message: 'No nodes for this domain' }.to_json)
        end

        trees.to_json
      end

      post '' do
        halt(405,
        { message: 'A habit tree is a composition of habit nodes, to create one use node parent/child references' }.to_json)
      end

      # Get subtree by root node id
      get '/:root_id' do |root_id|
        date_id = params[:date_id].to_i
        depth = (params[:depth] || 3).to_i

        tree = Subtree.generate(root_id, date_id)
        halt(404, { message: 'No habit data found!' }.to_json) unless tree
        status 200
        tree.to_d3_json(depth)
      end
    end

    namespace '/domains' do
      get '' do
        domain_list = domain_repo.all_as_json
        halt(404, { message: 'No Domains Found' }.to_json) unless domain_list

        status 200
        json domain_list
      end

      get '/:domain_id' do |id|
        halt(400, { message: "Not a valid domain" }.to_json) unless domain_repo.domains.to_a.length >= id.to_i
        if params['habit_node_depths'] == 'true'
          node_depths = habit_node_repo.habit_nodes.read("SELECT * FROM habit_node_depths_" + id.to_s)
          status 200
          json({ habit_nodes: node_depths.map{ |n| n } }.to_json)
        else
          status 200
          json domain_repo.as_json(id)
        end
      end

      get '/:domain_id/habits' do |id|
        habits = domain_repo
          .by_id_nest_with_habits(id)
          .one.habits
          .map(&:to_h)

        status 200
        json({ habits: habits }.to_json)
      end

      post '' do
        domain = MultiJson.load(request.body.read, symbolize_keys: true)
        domain = sanitise_values(domain)
        created = domain_repo.create(domain)

        halt(400, { message: unwrap_validation_error(created) }.to_json) unless created.success?
        status 201
        json({ id: created.flatten.to_s }.to_json)
      end

      put '/:domain_id' do |id|
        domain = MultiJson.load(request.body.read, symbolize_keys: true)
        existing = domain_repo.by_id(id)

        halt(404, { message: 'Domain Not Found' }.to_json) unless existing.exist?
        updated = domain_repo.update(id, domain)

        halt(422, { message: unwrap_validation_error(updated) }.to_json) unless updated.success?
        status 204
      end

      patch '/:domain_id' do |id|
        domain_client = MultiJson.load(request.body.read, symbolize_keys: true)
        domain_server = domain_repo.as_json(id)
        halt(404, { message: 'Domain Not Found' }.to_json) unless domain_server

        domain_client.each { |key, value| domain_server[key.to_s] = value }
        updated = domain_repo.update(id, domain_server)

        halt(422, { message: unwrap_validation_error(updated) }.to_json) unless updated.success?
        status 204
      end

      delete '/:domain_id' do |id|
        domain = domain_repo.as_json(id)
        halt(404, { message: 'Domain Not Found' }.to_json) unless domain

        domain_repo.delete(id.to_i)
        status 204
      end
    end

    namespace '/habits' do
      get '' do
        habit_list = habit_repo.all_as_json
        halt(404, { message: 'No Habits Found' }.to_json) unless habit_list

        status 200
        json habit_list
      end

      get '/:habit_id' do |id|
        status 200
        json habit_repo.as_json(id)
      end
      
      get '/:habit_id/habit_dates' do |habit_id|
        habit_id = habit_id.to_i
        length = params['length'].to_i
        halt(404, { message: 'No Habit Found' }.to_json) unless habit_repo.by_id(habit_id).exist?

        habit_date_list = habit_date_repo
          .habit_dates_for_one_habit_node(habit_id)
          .to_a
          .map do |struct|
            { 
              date_id: struct.date_id,
              date: struct.h_date,
              completed_status: struct.completed_status,
              habit_id: struct.habit_id
            }
          end
        halt(404, { message: 'No Habit Dates Found' }.to_json) unless habit_date_list.length > 0
        halt(422, { message: 'Invalid Length' }.to_json) unless length > 0
        habit_dates = length > habit_date_list.length ? habit_date_list : habit_date_list.slice(-length, length)
        status 200
        json json({habit_dates: habit_dates})
      end

      post '' do
        habit = MultiJson.load(request.body.read, symbolize_keys: true)
        habit = sanitise_values(habit)
        (habit[:parent_node_id] = nil) if habit[:parent_node_id] == ''
        created = habit_repo.create(habit)

        halt(400, { message: unwrap_validation_error(created) }.to_json) unless created.success?
        status 201
        json({ id: created.flatten[0].value! }.to_json)
      end

      delete '/:habit_id' do |id|
        habit = habit_repo.by_id(id)
        halt(404, { message: 'Habit Not Found' }.to_json) unless habit.exist?

        deleted = habit_repo.delete(id.to_i)
        halt(400, { message: unwrap_validation_error(deleted) }.to_json) unless deleted.success?
        status 204
      end

      %i[patch delete].each do |method|
        send(method, '') do
          halt(405, { message: 'Verb Not Permitted' }.to_json)
        end
      end
    end

    namespace '/habit_dates' do
      get '' do
        habit_date_list = habit_date_repo.all_as_json
        halt(404, { message: 'No Habit Dates Found' }.to_json) unless habit_date_list

        status 200
        json habit_date_list
      end

      post '' do
        payload = MultiJson.load(request.body.read, symbolize_keys: true)
        habit_dates = payload[:habit_dates]
        if habit_dates.length < 1
          return
        end
        
        success_monads = habit_dates.map { |hd|
          date = date_repo.by_id(hd[:date_id])
          return Dry::Monads::Failure.new(hd[:date_id]) unless date.exist?
      
          habit = habit_repo.by_id(hd[:habit_id])
          return Dry::Monads::Failure.new(hd[:habit_id]) unless habit.exist?

          created = habit_date_repo.create(hd)
        }
      
        halt(422, { message: unwrap_validation_error(success_monads.find { |monad| monad.failure? }) }.to_json) unless success_monads.all? { |monad| monad.success? }
        
        status 201
        json (success_monads.map { |m| m.flatten })
      end

      put '/' do
        habit_date = MultiJson.load(request.body.read, symbolize_keys: true)
        attrs = habit_date.reject { |k, _v| k == :completed_status }
        halt(404, { message: 'Habit Date Not Found' }.to_json) unless habit_date_repo.by_attrs(attrs).exist?

        updated = habit_date_repo.update(habit_date)

        halt(422, { message: unwrap_validation_error(updated) }.to_json) unless updated.success?
        status 204
      end      
      
      delete '/:habit_id/:date_id' do |habit_id, date_id|
        habit = habit_repo.as_json(habit_id)
        halt(404, { message: 'Habit Not Found' }.to_json) unless habit
        
        date = date_repo.as_json(date_id)
        halt(404, { message: 'Date Not Found' }.to_json) unless date
        
        deleted = habit_date_repo.delete(habit_id.to_i, date_id.to_i)
        halt(404, { message: 'HabitDate Not Found' }.to_json) unless deleted

        halt(400, { message: unwrap_validation_error(deleted) }.to_json) unless deleted

        status 204
      end

      %i[patch].each do |method|
        send(method, '') do
          halt(405, { message: 'Verb Not Permitted' }.to_json)
        end
      end
    end
  end
end
