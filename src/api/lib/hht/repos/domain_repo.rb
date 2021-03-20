# frozen_string_literal: true

module Hht
  module Repos
    class DomainRepo < ROM::Repository[:domains]
      include Import['persistence.container']
      include Dry::Monads[:result, :do]

      struct_namespace Entities
      commands delete: :by_pk, update: :by_pk

      def create(data)
        created_unique_domain = yield Hht::Transactions::Domains::Create.new.call(data)
        Success(created_unique_domain)
      end

      def query(conditions); domains.where(conditions); end

      def ids
        domains.pluck(:id)
      end

      def by_id(id)
        domains.by_pk(id)
      end

      def as_json(id)
        domain = domains.by_pk(id).one
        { 
          'id' => domain.fetch(:id),
          'name' => domain.fetch(:name),
          'description' => domain.fetch(:description),
          'rank' => domain.fetch(:rank),
          'hashtag' => domain.fetch(:hashtag),
        }
      end

      def all_as_json
        { :domains => domains.all }.to_json
      end
    end
  end
end
