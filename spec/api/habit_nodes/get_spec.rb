# frozen_string_literal: true

RSpec.describe 'Feature: habit_nodes resource' do
  context 'Given a persisted node' do
    before do
      @habit_node = valid_root_only_node  # A factory object
      habit_node_repo.create(@habit_node)
    end

    describe 'When #get to /api/habit_trees/nodes' do
      let(:response) { get '/api/habit_trees/nodes' }

      it 'Then returns status code 200' do
        expect(response.status).to eq 200
      end

      describe 'And returns json' do
        it { 'has json mime type in response header' }
        it { 'returns the expected json object' }
      end
    end

    describe 'When #get to /api/habit_trees/nodes/:id' do
      let(:response) { get "/api/habit_trees/nodes/#{habit_node_repo.ids.first}" }

      it 'Then returns correct status code' do
        expect(response.status).to eq 200
      end

      describe 'And returns json' do
        it 'has json mime type in response header' do
          expect(response.header['Content-Type']).to eq 'application/json'
        end

        it 'returns the expected json object' do
          expect(response.body).to be_json_eql(@habit_node.to_json)
        end
      end

      describe 'And has resources with necessary attributes' do
        it 'has id attr' do
          expect(response.body).to have_json_path("id")
          expect(response.body).to have_json_type(Integer).at_path("id")
        end

        it 'has lft attr' do
          expect(response.body).to have_json_path("lft")
          expect(response.body).to have_json_type(Integer).at_path("lft")
        end

        it 'has rgt attr' do
          expect(response.body).to have_json_path("rgt")
          expect(response.body).to have_json_type(Integer).at_path("rgt")
        end
      end
    end
  end

  context 'Given two persisted nodes (parent/child)' do
    before do
      @habit_node_1 = valid_parent_of_one_node  # A factory object for valid root node
      @habit_node_2 = valid_first_child_node  # A factory object for valid child node
      habit_node_repo.create(@habit_node_1)
      habit_node_repo.create(@habit_node_2)
    end

    describe 'When #get to /api/habit_trees/nodes' do
      let(:response) { get '/api/habit_trees/nodes' }
      let(:resource) { JSON.load response.body }

      it 'Then returns status code 200' do
        expect(response.status).to eq 200
      end

      describe 'And returns json' do
        it 'has json mime type in response header' do
          expect(response.header['Content-Type']).to eq 'application/json'
        end

        it 'returns the expected json objects' do
          expect(resource).to include_json(@habit_node_1.to_json).at_path("habit_nodes")
          expect(resource).to include_json(@habit_node_2.to_json).at_path("habit_nodes")
        end
      end

      describe 'And has resources with necessary attributes' do
        it 'has two tuples' do
          expect(resource).to have_json_size(2).at_path("habit_nodes")
        end

        it 'has tuples with lft attr' do
          expect(resource).to have_json_path("habit_nodes/0/lft")
          expect(resource).to have_json_type(Integer).at_path("habit_nodes/0/lft")
          expect(resource).to have_json_path("habit_nodes/1/lft")
          expect(resource).to have_json_type(Integer).at_path("habit_nodes/1/lft")
        end

        it 'has tuples with rgt attr' do
          expect(resource).to have_json_path("habit_nodes/0/rgt")
          expect(resource).to have_json_type(Integer).at_path("habit_nodes/0/rgt")
          expect(resource).to have_json_path("habit_nodes/1/rgt")
          expect(resource).to have_json_type(Integer).at_path("habit_nodes/1/rgt")
        end

        it 'has tuples with parent_id attr' do
          expect(resource).to have_json_path("habit_nodes/0/parent_id")
          expect(resource).to have_json_path("habit_nodes/1/parent_id")
        end
      end

      describe 'And the root node has a nil parent_id attribute' do
        it 'has a value of nil' do expect(resource).to have_json_type(NilClass).at_path("habit_nodes/0/parent_id") end
      end

      describe 'And the child node has parent id attr' do
        it 'has an integer as parent_id' do expect(resource).to have_json_type(Integer).at_path("habit_nodes/1/parent_id") end
        it 'has the parents id as parent_id' do expect(parse_json(resource)['habit_nodes'][1]['parent_id']).to eq @habit_node_1[:id] end
      end
    end
  end
end
