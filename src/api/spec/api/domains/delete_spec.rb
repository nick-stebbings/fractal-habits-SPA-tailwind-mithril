# # frozen_string_literal: true

# RSpec.describe 'Feature: domains resource' do
#   context 'Given a persisted domain tuple' do
#     let(:resource) { JSON.load response.body }

#     before do
#       @domain = valid_domain
#       @domain_id = @domain[:id]
#       domain_repo.create(@domain)
#     end

#     describe 'When #delete to /api/domains/:id' do
#       let!(:response) { delete("/api/domains/#{@domain_id}") }

#       it 'Then returns status code 204' do
#         expect(response.status).to eq 204
#       end

#       it 'And it deleted the domain' do
#         expect(domain_repo.as_json(@domain_id)).to eq(nil)
#       end

#       it 'And it is no longer in the list of domains' do
#         domains = JSON.load get("/api/domains").body
#         expect(parse_json(domains)['domains']).to be_empty
#       end
#     end
#   end
# end