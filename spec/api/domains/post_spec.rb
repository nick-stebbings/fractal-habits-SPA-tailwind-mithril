# frozen_string_literal: true

RSpec.describe 'Feature: domains resource' do
  context 'Given a valid domain json' do
    before do
      @domain = valid_domain
      @domain_id = @domain[:id]
      @domain_as_json = @domain.to_json
    end
    
    describe 'When #post to /api/domains' do
      let(:response) { post('/api/domains', @domain_as_json) }
      let(:resource) { JSON.load response.body }

      it 'Then returns status code 201' do
        expect(response.status).to eq 201
      end

      describe 'And it persisted the domain json' do
        it do
          response
          expect(domain_repo.as_json(domain_repo.ids.first)).to eq (parse_json @domain_as_json)
        end
      end
    end
  end
end
