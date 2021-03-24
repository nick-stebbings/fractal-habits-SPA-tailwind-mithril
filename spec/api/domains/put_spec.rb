# frozen_string_literal: true

RSpec.describe 'Feature: domains resource' do
  context 'Given a valid domain json AND a persisted domain tuple with the same id' do
    before do
      @domain = valid_domain
      @domain_id = @domain[:id]
      domain_repo.create(@domain)

      @domain2 = valid_domain
      @domain_as_json = @domain2.to_json
    end
    
    describe 'When #put to /api/domains/:domain_id' do
      let(:response) { put("/api/domains/#{@domain_id}", @domain_as_json) }
      let(:resource) { JSON.load response.body }

      it 'Then returns status code 204' do
        expect(response.status).to eq 204
      end

      describe 'And it persisted the new domain json' do
        it do
          
          binding.pry
          expect(domain_repo.as_json(@domain_id)).to eq (parse_json @domain_as_json)
        end
      end
    end
  end
end
