# frozen_string_literal: true

module Entities
  class Domain < ROM::Struct
    attr_reader :attributes

    def initialize(attributes)
      @attributes = attributes
    end
  end
end
