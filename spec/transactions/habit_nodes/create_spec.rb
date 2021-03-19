# frozen_string_literal: true

RSpec.describe Hht::Transactions::HabitNodes::Create do
  # APPEND ROOT
  context 'Given a valid root node json' do
    before do
      @root_node = valid_new_root_node
    end
    
    describe 'When a transaction is initiated with the json' do
      subject { described_class.new(habit_node_repo: habit_node_repo) }

      describe 'Then it validates the root node' do
        let! (:transaction) { subject.call(@root_node) }

        it 'it is valid with a parent_id of nil' do
          expect(subject.call(parent_id: nil)).to return_success_monad
        end

        it 'it is invalid with a parent_id of 0' do
          expect(subject.call(parent_id: 0)).to return_validation_failure
        end
        it 'it is invalid with a parent_id of -13' do
          expect(subject.call(parent_id: -13)).to return_validation_failure
        end
        
        it 'is invalid with a blank parent_id' do
          expect(subject.call(parent_id: '')).to return_validation_failure
        end
        
        it 'is invalid with a non-existing parent_id' do
          expect(subject.call(parent_id: 99)).to return_validation_failure
        end
        
        it 'is invalid with a string parent_id' do
          expect(subject.call(parent_id: 'steve')).to return_validation_failure
        end
      end

      describe 'And it persists the root node' do
        let! (:transaction) { subject.call(@root_node) }
        let (:updated_root ) { valid_root_only_node }
        let(:resource) { habit_node_repo.as_json(updated_root[:id]) }

        it 'it persists a node' do
          expect(transaction).to return_success_monad
          expect(resource.to_json).to be_json_eql(updated_root.to_json)
        end

        it 'updates the lft & rgt values of the root node' do
          expect(resource['lft']).to eq 1
          expect(resource['rgt']).to eq 2
        end
      end
    end
  end

  # APPEND ONLY CHILD
  context 'Given a valid (child) habit node json AND a persisted (parent) habit node tuple' do
    before do
      @parent_node = valid_new_parent_node
      habit_node_repo.create(@parent_node)
      @new_child_node = valid_new_child_node
    end

    describe 'When a transaction is initiated with the (child) json' do
      subject { described_class.new(habit_node_repo: habit_node_repo) }

      describe 'Then it validates the child node' do
        it 'is valid with an existing integer parent_id' do
          expect(subject.call(parent_id: @parent_node[:id])).to return_success_monad
        end

        it 'is valid with a filled in lft attribute (value is overridden)' do
          expect(subject.call(parent_id: @parent_node[:id], lft: 14)).to return_success_monad
        end

        it 'is valid with a filled in rgt attribute (value is overridden)' do
          expect(subject.call(parent_id: @parent_node[:id], rgt: 12)).to return_success_monad
        end

        it 'is valid with filled in lft & rgt attributes (values are overridden)' do
          expect(subject.call(parent_id: @parent_node[:id], lft:11, rgt: 12)).to return_success_monad
        end
      end

      describe 'And it persists the child node' do
        let! (:transaction) { subject.call(@new_child_node) }
        let (:updated_parent ) { valid_parent_of_one_node }
        let (:updated_child ) { valid_first_child_node }
        let(:parent_resource) { habit_node_repo.as_json(updated_parent[:id]).to_json }

        it 'it persists a node' do
          persisted_node_id = transaction.flatten
          child_resource = habit_node_repo.as_json(persisted_node_id).to_json

          expect(transaction).to return_success_monad
          expect(child_resource).to be_json_eql(updated_child.to_json)
        end

        it 'updates the lft & rgt values of the parent' do 
          expect(parse_json(parent_resource)['rgt']).to eq 4
          expect(parse_json(parent_resource)['lft']).to eq 1
        end

        it 'updates the lft & rgt values of the child' do 
          persisted_node_id = transaction.flatten
          child_resource = habit_node_repo.as_json(persisted_node_id)
          expect(child_resource['lft']).to eq 2
          expect(child_resource['rgt']).to eq 3
        end
      end
    end
  end

  # APPEND SIBLING
  context 'Given a valid (child) habit node json AND a persisted (parent) node tuple AND a persisted (child) node tuple' do
  #   before do
  #     @parent_node = valid_new_parent_node
  #     habit_node_repo.create(@parent_node)
  #     @new_child_node = valid_new_child_node
  #   end

  #   describe 'When a transaction is initiated with the (child) json' do
  #     subject { described_class.new(habit_node_repo: habit_node_repo) }

  #     describe 'Then it validates the child node' do
  #       it 'is invalid with a blank parent_id' do
  #         expect(subject.call(parent_id: '')).to return_failure_monad
  #       end

  #       it 'is invalid with a non-existing parent_id' do
  #         expect(subject.call(parent_id: 1000)).to return_failure_monad
  #       end

  #       it 'is valid with an existing integer parent_id' do
  #         expect(subject.call(parent_id: @parent_node[:id])).to return_success_monad
  #       end
  #     end

  #     describe 'And it persists the child node' do
  #       let (:transaction) { subject.call(@new_child_node) }
  #       let (:persisted_child_node) { transaction.flatten }
  #       let (:updated_parent ) { valid_parent_of_one_node }
  #       let (:updated_child ) { valid_first_child_node }

  #       it 'Then it persists a node' do
  #         expect(transaction).to return_success_monad
  #         get "/api/habit_trees/nodes"
  #         expect(last_response.body).to include_json(updated_child.to_json).at_path("habit_nodes/1")
  #       end

  #       it 'And updates the lft & rgt values of the parent' do 
  #         get "/api/habit_trees/nodes/#{updated_parent[:id]}"
  #         expect(last_response.body).to eq updated_parent.to_json
  #       end

  #       it 'And updates the lft & rgt values of the child' do 
  #         get "/api/habit_trees/nodes"
  #         expect(parse_json(last_response.body)['habit_nodes'][1]['lft']).to eq 2
  #         expect(parse_json(last_response.body)['habit_nodes'][1]['rgt']).to eq 3
  #       end
  #     end
  #   end
  end
end
