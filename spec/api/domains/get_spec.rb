# frozen_string_literal: true

RSpec.describe 'Feature: domains resource' do
  context 'Given two persisted domain tuples' do    
    before do
      @domain1 = valid_domain
      @domain2 = valid_domain
      domain_repo.create(@domain1)
      domain_repo.create(@domain2)
    end
    
    describe 'When #get to /api/domains' do
      let(:response) { get '/api/domains' }
      let(:resource) { JSON.load response.body }

      it 'Then returns status code 200' do
        expect(response.status).to eq 200
      end

      describe 'And returns json' do
        it 'has json mime type in response header' do
          expect(response.header['Content-Type']).to eq 'application/json'
        end

        it 'returns the expected json objects' do
          expect(resource).to include_json(@domain1.to_json).at_path("domains")
          expect(resource).to include_json(@domain2.to_json).at_path("domains")
        end
      end

      describe 'And has resources with necessary attributes' do
        it 'has two tuples' do
          expect(resource).to have_json_size(2).at_path("domains")
        end

        it 'has tuples with id attr' do
          expect(resource).to have_json_path("domains/0/id")
          expect(resource).to have_json_type(Integer).at_path("domains/0/id")
        end

        it 'has tuples with name attr' do
          expect(resource).to have_json_path("domains/0/name")
          expect(resource).to have_json_type(String).at_path("domains/0/name")
        end

        it 'has tuples with description attr' do
          expect(resource).to have_json_path("domains/0/description")
          expect(resource).to have_json_type(String).at_path("domains/0/description")
        end
      end
    end

    describe 'When #get to /api/domains/:id' do
      let(:response) { get "/api/domains/#{domain_repo.ids.first}" }

      it 'Then returns correct status code' do
        expect(response.status).to eq 200
      end

      describe 'And returns json' do
        it 'has json mime type in response header' do
          expect(response.header['Content-Type']).to eq 'application/json'
        end
        it 'returns the expected json object' do
          expect(response.body).to be_json_eql(@domain1.to_json)
        end
      end

      describe 'And has necessary attributes' do
        it 'has id attr' do
          expect(response.body).to have_json_path("id")
          expect(response.body).to have_json_type(Integer).at_path("id")
        end
        it 'has name attr' do
          expect(response.body).to have_json_path("name")
          expect(response.body).to have_json_type(String).at_path("name")
        end
        it 'has description attr' do
          expect(response.body).to have_json_path("description")
          expect(response.body).to have_json_type(String).at_path("description")
        end
      end
    end
  end
end
