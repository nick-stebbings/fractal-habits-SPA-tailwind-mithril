# # frozen_string_literal: true

# RSpec.describe Hht::Transactions::HabitNodes::Create do
#   let(:habit_nodes_factory) { Factory.registry.elements[:habit_node] }
#   let(:create_transaction) { described_class.new }

#   context 'When first created' do
#     it 'has a valid factory' do
#       expect(habit_nodes_factory.create).to be_kind_of Entities::HabitNode
#     end

#     describe 'validates presence of lft' do
#       it "is invalid with a 'nil' lft" do
#         expect(create_transaction.call(lft: nil)).to return_failure_monad
#       end

#       it 'is invalid with a blank lft' do
#         expect(create_transaction.call(lft: '')).to return_failure_monad
#       end

#       it 'is valid with an integer lft when all required attrs present' do
#         expect(create_transaction.call(lft: 1, rgt: 2)).to return_success_monad
#       end
#     end

#     describe 'validates presence of rgt' do
#       it "is invalid with a 'nil' rgt" do
#         expect(create_transaction.call(rgt: nil)).to return_failure_monad
#       end

#       it 'is invalid with a blank rgt' do
#         expect(create_transaction.call(rgt: '')).to return_failure_monad
#       end

#       it 'is valid with an integer rgt when all required attrs present' do
#         expect(create_transaction.call(lft: 1, rgt: 2)).to return_success_monad
#       end
#     end

#     describe 'validates parent_id' do
#       it 'is invalid with a blank parent_id when all required attrs present' do
#         expect(create_transaction.call(lft: 1, rgt: 2, parent_id: '')).to return_failure_monad
#       end

#       it 'is valid with an integer parent_id when all required attrs present' do
#         expect(create_transaction.call(lft: 1, rgt: 2, parent_id: 3)).to return_success_monad
#       end
#     end
#   end

#   it "should create a habit node" do
#     Factory.rom.commands[:habit_nodes][:create].call(id:1, lft:1, rgt:4)
#     node = habit_nodes_factory.create

#     expect(Factory.rom.relations[:habit_nodes].count).to be(1)
#     expect(Factory.rom.relations[:habit_nodes].one[:id]).to eq(node.id)
#   end

# end
