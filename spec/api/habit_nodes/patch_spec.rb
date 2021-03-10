# frozen_string_literal: true

RSpec.describe 'Feature: habit_nodes resource' do
  context 'Given a valid habit_node update json AND a persisted habit node tuple' do
    before do
      @habit_node_update = { id: 3 }
      
      @habit_node = valid_root_only_node
      habit_node_repo.create(@habit_node)
      @habit_node_id = @habit_node[:id]
      @updated_attributes = @habit_node.merge(@habit_node_update).to_json
    end

    describe 'When #patch to /api/habit_trees/nodes/:id' do
      let!(:response) { patch("/api/habit_trees/nodes/#{@habit_node_id}", @habit_node_update.to_json) }

      it 'Then returns status code 204' do
        expect(response.status).to eq 204
      end

      it 'And it patched the habit node' do
        expect(habit_node_repo.as_json(3)).to eq (parse_json @updated_attributes)
      end
    end
  end
end
