# frozen_string_literal: true

RSpec.describe 'Feature: domains resource' do
  context 'Given a valid domain update json AND a persisted domain tuple' do
    let(:resource) { JSON.load response.body }

    before do
      @domain_update = { id: 3, name: 'Mental Wellbeing' }
      
      @domain = valid_domain
      domain_repo.create(@domain)
      @domain_id = @domain[:id]
    end

    describe 'When #patch to /api/domains/:id' do
      let!(:response) { patch("/api/domains/#{@domain_id}", @domain_update.to_json) }

      it 'Then returns status code 204' do
        expect(response.status).to eq 204
      end

      it 'And it patched the domain' do
        updated_attributes = @domain.merge(@domain_update).to_json
        expect(domain_repo.as_json(3)).to eq (parse_json updated_attributes)
      end
    end
  end
end
