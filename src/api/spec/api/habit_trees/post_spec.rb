# frozen_string_literal: true

RSpec.describe 'Feature: habit_trees' do
  context 'Since habit_tree is a representation of habit_nodes and not really a resource' do

    describe 'When post to /habit_trees' do
      let!(:response) { post '/api/habit_trees' }

      it { expect(response.status).to eq 405 }
    end
  end
end
