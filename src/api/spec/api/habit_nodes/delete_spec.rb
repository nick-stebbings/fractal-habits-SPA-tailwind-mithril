# frozen_string_literal: true

RSpec.describe 'Feature: habit_nodes resource' do
  context 'Given a persisted habit_node tuple' do
    let(:resource) { JSON.load response.body }

    before do
      @habit_node = valid_root_only_node
      @habit_node_id = @habit_node[:id]
      habit_node_repo.create(@habit_node)
    end

    describe 'When #delete to /api/habit_trees/nodes/:id' do
      let!(:response) { delete("/api/habit_trees/nodes/#{@habit_node_id}") }

      it 'Then returns status code 204' do
        expect(response.status).to eq 204
      end

      it 'And it deleted the habit_node' do
        expect(habit_node_repo.as_json(@habit_node_id)).to eq(nil)
      end

      it 'And it is no longer in the list of habits' do
        habit_nodes = JSON.load get("/api/habit_trees/nodes").body
        expect(parse_json(habit_nodes)['habit_nodes']).to be_empty
      end
    end
  end
end