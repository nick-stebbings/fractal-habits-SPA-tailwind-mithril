# # frozen_string_literal: true

# RSpec.describe 'Feature: habit_date resource' do
#   context 'Given a persisted habit_date' do
#     before do
#       @habit_date = valid_habit_date  # A factory object
#       habit_date_repo.create(@habit_date)
#     end

#     describe 'When #get to /api/habit-dates/@habit_date.id' do
#       let(:response) { get '/api/habit-dates/@habit_date.id' }

#       it 'Then returns status code 200' do
#         expect(response.status).to eq 200
#       end

#       describe 'And returns json' do
#         it { 'has json mime type in response header' }
#         it { 'returns the expected json object' }
#       end
#     end
#   end

#   context 'Given two persisted habit_dates' do
#     before do
#       @habit_date_1 = habit_date.create
#       @habit_date_2 = habit_date.create
#       habit_date_repo.create(@habit_date_1)
#       habit_date_repo.create(@habit_date_2)
#     end

#     describe 'When #get to /api/habit-dates' do
#       let(:response) { get '/api/habit-dates' }
#       let(:resource) { JSON.load response.body }

#       it 'Then returns status code 200' do
#         expect(response.status).to eq 200
#       end

#       describe 'And returns json' do
#         it { 'has json mime type in response header' }
#         it { 'returns the expected json object' }
#       end
#     end
#   end
# end
