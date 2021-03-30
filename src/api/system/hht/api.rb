# frozen_string_literal: true

require 'sinatra/base'
require 'sinatra/namespace'
require 'sinatra/reloader'
require 'sinatra/cross_origin'
require 'sinatra/json'
require 'multi_json'

require_relative 'container'
require File.join(APP_ROOT, 'lib', 'subtree')

module Hht
  class Api < Sinatra::Base
    before do
      content_type :json
      headers 'Access-Control-Allow-Origin' => '*', 'Access-Control-Allow-Credentials' => 'true' 
    end

    configure :development, :test do
      register Sinatra::Reloader
      set :protection, :except => :json_csrf
    end

    configure do
      register Sinatra::Namespace
      register Sinatra::CrossOrigin
      enable :cross_origin
      set :root, APP_ROOT
    end

    include Import[
      'repos.domain_repo',
      'repos.habit_node_repo',
      'repos.habit_repo',
      'repos.date_repo',
      'yaml.yaml_container' # For the 'dummy data' Yaml loader
    ]

    def populate_yaml_relations(days_to_track)
      #TODO refactor
      domains = yaml_container.relations.domains
      habits = yaml_container.relations.habits
      dates = yaml_container.relations.dates
      habit_dates = yaml_container.relations.habit_dates
      habit_nodes = yaml_container.relations.habit_nodes

      if dates.to_a.empty?
        date_range = ((Date.today- (days_to_track - 1)) .. Date.today)
        date_structs = date_range.each_with_index { |date, i| dates.insert({h_date: date, id: i + 1})}

        domain_habit_lists = []
        habit_list = []
        habit_id = 1
        domain_list = domains.to_a.each_with_object([]) do |domain, list|
          # domains.insert({ id: domain.id, name: domain.name, habits: [] })
          habit_names = domain.habits.to_s.scan(/:name=>"(.*?)"/) #.gsub(/(\\|\\n|\\t)/, '')
          
          domain_habit_lists << habit_names.each_with_object([]) do |habit_name, list|
            habit = { id: habit_id, domain_id: domain.id, name: habit_name.first }
            list << habit
            habit_list << habit
            habits.insert(habit)
            habit_id += 1
          end
        end

        habit_node_id = 1
        habit_nodes_list = []
        domains.to_habit_trees.each_with_index do |domain, index|
          tree = Subtree.json_each_after(domain.to_json)
          yield_mptt_values(tree, index) do |vals, name|
            new_habit = {id: habit_node_id, lft: vals[:lft], rgt: vals[:rgt], domain_id: index}
            habit_nodes.insert({id: habit_node_id, lft: vals[:lft], rgt: vals[:rgt], domain_id: index})
            found = habit_list.find { |habit| habit[:name] == name}
            next unless found
            found[:habit_node_id] = habit_node_id
            
            habit_node_id += 1
          end
        end
        habit_dates_list = []
        domain_habit_lists.each do |habit_list|
          habit_list.each do |habit|
            dates.to_a.each do |date|
              habit_dates.insert({habit_id: habit[:id], date_id: date[:id], status_completed: false})
            end
          end
        end
        # binding.pry
      end

      { nodes: habit_nodes.to_a, dates: dates.to_a, habit_dates: habit_dates.to_a, domains: domains.without_habit_trees, habits: habits.to_a }
    end

    def yield_mptt_values(node, domain_index)
      left_counter = 1
      node.preordered_each do |n, i|
        lft = left_counter
        rgt = (n.size == 1 ? (lft + 1) : (lft + 2 * n.size - 1))
        left_counter = n.size == 1 ? (left_counter + 2) : (left_counter + 1)
        yield({id: i, lft: lft, rgt: rgt}, n.name) if block_given?
        n.content = {id: "L#{lft}-R#{rgt}-D#{domain_index}", value: n.content, completed_status: 'f', level: n.node_depth}.to_json if block_given?
      end
    end

    def domain_list_as_json(domain_relation, index)
      domain = domain_relation
        .by_id(index)
        { 
          name: domain.name,
          children: domain[:habits]
        }
    end

    namespace '/api' do
      [:get, :post, :put, :patch, :delete].each do |method|
        send(method, '') do
          halt(405, { message:'Verb Not Permitted'}.to_json)
        end
      end
    end

    namespace '/api/demo' do
      get '' do
        demo_data_payload = populate_yaml_relations(params['tracking_length'].to_i)
        status 200
        json demo_data_payload
      end
      
      get '/domain/:id/habit_tree' do |id|
        domain = yaml_container
        .relations
        .domains
        .to_a[id.to_i]
        
        tree = { 
          name: domain.name,
          children: domain[:habits]
        }
        
        status 200
        Subtree.json_each_after(tree.to_json).to_json
      end

      [:post, :put, :patch, :delete].each do |method|
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

      # Get root node tree. Take a query string parameter to decide if to read from Demo (YAML memory)
      get '' do
        tree = nil
        demo = params[:demo] == 'true'
        
        if(demo)
          tree = domain_list_as_json(yaml_container.relations.domains, params[:domain_id].to_i)
        else
          if(habit_node_repo.root_node.exist?)
            root_id = habit_node_repo.root_node.first.id
            tree= Subtree.generate(root_id, habit_node_repo)
          else
            return status 404
          end
        end

        status 200
        demo ? tree.to_json : (json Subtree.as_json(tree))
      end

      post '' do
        halt(405, { message:'A habit tree is a composition of habit nodes, to create one use node parent/child references'}.to_json)
      end

      # Get subtree by root node id
      get '/:root_id' do |root_id|
        tree = Subtree.generate(root_id)
        status tree ? 404 : 200
        json Subtree.as_json(tree)
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
        [(created.success? ? 201 : 400), { 'Location' => 'https://google.com'} , body]
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
          status 422
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
          status 422
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
        if created.success?
          url = "http://localhost:9393/habits/#{created.flatten}"
          headers 'Location' => url # Due to CORS this is not being received by client. TODO figure out why and don't send back
          status 204
        else
          status 422
        end
      end

      # put '/:domain_id' do |id|
      #   domain = MultiJson.load(request.body.read, :symbolize_keys => true)
      #   # TODO: Use contract to validate payload is a full domain resource
      #   existing = domain_repo.by_id(id)
      #   halt(404, { message:'Domain Not Found'}.to_json) unless existing

      #   domain_repo.update(id, domain)
      #   # TODO: If returns success monad, we know it persisted
      #   # So redirect
      #   url = "http://localhost:9393/domains/#{id}"
      #   response.headers['Location'] = url
      #   status 204
      # end

      # patch '/:domain_id' do |id|
      #   domain_client = MultiJson.load(request.body.read, :symbolize_keys => true)
      #   domain_server = domain_repo.as_json(id)
      #   halt(404, { message:'Domain Not Found'}.to_json) unless domain_server

      #   domain_client.each do |key, value|
      #     domain_server[key.to_sym] = value
      #   end
      #   domain_repo.update(id, domain_server)
      #   status 204
      # end
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
          status 400
        end
      end
    end

    # RESOURCES TO BE DESCRIBED LATER
    namespace '/api/habit_dates' do
    end
  end
end
