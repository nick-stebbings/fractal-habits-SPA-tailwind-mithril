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

      it 'Then returns status code 204' do
        expect(response.status).to eq 204
      end

      describe 'And it persisted the new domain json' do
        it do
          response
          domain = domain_repo.by_id(@domain_id).one.to_h
          expect(domain.to_json).to be_json_eql @domain_as_json
        end
      end
    end
  end
end
