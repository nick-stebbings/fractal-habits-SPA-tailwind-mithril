# frozen_string_literal: true

class List
  attr_reader :list

  def initialize(nodes_array, accessor)
    @list = nodes_array.map { |node| node[accessor] }
  end
end
