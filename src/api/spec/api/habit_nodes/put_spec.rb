# frozen_string_literal: true

RSpec.describe 'Feature: habit_nodes resource' do
  context 'Given a valid habit_node json' do
    let(:resource) { JSON.load response.body }

    before do
      @habit_node = valid_root_only_node
      @habit_node_id = @habit_node[:id]
      habit_node_repo.create(@habit_node)
      
      @habit_node_2 = valid_root_only_node
      @habit_node_as_json = @habit_node_2.to_json
    end

    describe 'When #put to /api/habit_trees/nodes/:id' do
      let!(:response) { put("/api/habit_trees/nodes/#{@habit_node_id}", @habit_node_as_json) }

      it 'Then returns status code 204' do
        expect(response.status).to eq 204
      end

      it 'And it persists the habit node' do
        habit_node = habit_node_repo.by_id(@habit_node_id).one.to_h
        expect(habit_node.to_json).to be_json_eql @habit_node_as_json
      end
    end
  end
end