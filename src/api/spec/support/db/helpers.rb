# frozen_string_literal: true

module Test
  module DatabaseHelpers
    include Dry::Monads[:result]

    module_function

    def success
      Success
    end

    def failure
      Failure
    end

    def validation_failure(result)
      result.class.name == 'Dry::Validation::Failures'
    end

    def app
      Hht::Api
    end

    def rom
      Hht::Container['persistence.container']
    end

    def db
      Hht::Container['db.connection']
    end

    def valid_domain
      attributes_for(:domain)
    end

    def valid_new_root_node
      attributes_for(:new_root_node)
    end

    def valid_root_only_node
      attributes_for(:root_only_node)
    end

    def valid_new_parent_node
      attributes_for(:new_parent_node)
    end
    
    def valid_new_child_node
      attributes_for(:new_child_node)
    end

    def valid_parent_of_one_node
      attributes_for(:parent_of_one_node)
    end

    def valid_first_child_node
      attributes_for(:first_child_node)
    end
  end
end
