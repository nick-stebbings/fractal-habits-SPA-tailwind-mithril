# frozen_string_literal: true

require 'sinatra/base'
require 'sinatra/namespace'
require 'sinatra/reloader'
require 'sinatra/cross_origin'
require 'sinatra/json'
require 'multi_json'
require 'tree'
require 'pry'

require_relative 'container'
require File.join(APP_ROOT, 'lib', 'subtree')
require File.join(APP_ROOT, 'lib', 'persistence', 'yaml_demo')

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
      'yaml.container' # For the 'dummy data' Yaml loader
    ]

    helpers do
      def map_immediate_children_to_tree_nodes(parent_id)
        habit_node_repo
          .nest_parent_with_immediate_child_nodes(parent_id)
          .to_a
          .reject { |node| node.parent.nil? }
          .map(&:to_tree_node)
      end

      def map_node_and_immediate_children_to_tree_nodes(parent_id)
        habit_node_repo
          .nest_parent_with_immediate_child_nodes(parent_id)
          .to_a
          .select { |node| !node.parent.nil? || node.id == parent_id }
          .map(&:to_tree_node)
      end

      def map_node_and_descendants_to_struct_nodes(root_id)
        root = habit_node_repo.by_id(root_id).one
        habit_node_repo
          .nest_parent_with_descendant_nodes_between_lr(root.lft, root.rgt)
          .to_a
      end

      def generate_subtree(root_id)
        nodes_array = map_node_and_descendants_to_struct_nodes(root_id)
        root_node = nodes_array.shift
        Subtree.new(root_node.to_tree_node, nodes_array).build
      end
    end

    namespace '/api' do
      [:get, :post, :put, :patch, :delete].each do |method|
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
          domain = container
          .relations
          .domains
            .to_a[params[:domain_id].to_i]
            
            tree = { 
              name: domain.name,
              children: domain.habits
            }
        else
          if(habit_node_repo.root_node.exist?)
            root_id = habit_node_repo.root_node.first.id
            tree= generate_subtree(root_id)
          else
            return status 404
          end
        end
        # binding.pry

        status 200
        demo ? tree.to_json : (json Subtree.as_json(tree))
      end

      post '' do
        halt(405, { message:'A habit tree is a composition of habit nodes, to create one use node parent/child references'}.to_json)
      end

      # Get subtree by root node id
      get '/:root_id' do |root_id|
        tree = generate_subtree(root_id)
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
