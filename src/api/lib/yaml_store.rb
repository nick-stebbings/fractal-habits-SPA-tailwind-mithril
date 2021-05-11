# frozen_string_literal: true

class YAMLStore
  attr_reader :domains, :habits, :dates, :habit_dates, :habit_nodes
  attr_accessor :tree

  @@yaml = Hht::Container.resolve('yaml.yaml_container')
  @@ready = false
  @@current = nil
  @@data = nil

  def initialize(days_to_track = 28)
    @domains = @@yaml.relations.domains
    @habits = @@yaml.relations.habits
    @dates = @@yaml.relations.dates
    @habit_dates = @@yaml.relations.habit_dates
    @habit_nodes = @@yaml.relations.habit_nodes

    parsed_dataset = populate_yaml_relations(days_to_track)

    @@ready = true
    @@current = self
    @@data = parsed_dataset
  end

  def self.ready
    @@ready
  end

  def self.current
    @@current
  end

  def self.get_data
    @@data
  end

  def get_string_status_replacement(node_content, new_status)
    ["#{node_content}-incomplete", "#{node_content}-#{!new_status}", "#{node_content}-#{new_status}"]
  end

  def replace_tree!(dom_idx, date_id, habit_date, attrs)
    node_id_to_change = habits.restrict(id: attrs[:habit_id]).one[:habit_node_id]
    node_to_change = habit_nodes.restrict(id: node_id_to_change).one
    node_content = "L#{node_to_change[:lft]}R#{node_to_change[:rgt]}"
    sub_strings = get_string_status_replacement(node_content, habit_date[:completed_status])

    tree_to_edit = tree[dom_idx][date_id.to_s] || tree[dom_idx][:default].dup
    # We have three possible states so need to gsub both possible values for new status, then assign the changed string
    replace_incomplete = tree_to_edit.gsub(sub_strings[0], sub_strings[2])
    replace_boolean = tree_to_edit.gsub(sub_strings[1], sub_strings[2])
    tree[dom_idx][date_id.to_s] = (tree_to_edit == replace_incomplete ? replace_boolean : replace_incomplete)
  end

  def populate_yaml_relations(days_to_track)
    # TODO: refactor
    if @dates.to_a.empty? && habit_dates.to_a.empty? && habit_nodes.to_a.empty?
      date_range = ((Date.today - (days_to_track - 1))..Date.today)
      date_structs = date_range.each_with_index { |date, i| @dates.insert({ h_date: date, id: i + 1 }) }
      domain_habit_lists = []
      habit_list = []
      habit_id = 1
      domain_list = domains.to_a.each_with_object([]) do |domain, _list|
        # domains.insert({ id: domain.id, name: domain.name, habits: [] })
        habit_names = domain.habits.to_s.scan(/:name=>"(.*?)"/) # .gsub(/(\\|\\n|\\t)/, '')

        domain_habit_lists << habit_names.each_with_object([]) do |habit_name, list|
          habit = { id: habit_id, domain_id: domain.id, name: habit_name.first,
                    initiation_date: (Date.today - days_to_track - 1) }
          list << habit
          habit_list << habit
          habits.insert(habit)
          habit_id += 1
        end
      end

      trees = (1..domain_habit_lists.size).map { {} }
      habit_node_id = 1
      habit_nodes_list = []
      domains.to_habit_trees.each_with_index do |domain, index|
        current_tree = Subtree.json_to_ternarised_and_listified_treenodes(domain.to_json)
        current_tree.yield_d3_values(index) do |vals, name|
          new_habit_node = { id: habit_node_id, lft: vals[:lft], rgt: vals[:rgt], domain_id: index }
          habit_nodes.insert({ id: habit_node_id, lft: vals[:lft], rgt: vals[:rgt], domain_id: index })
          found = habit_list.find { |habit| habit[:name] == name }
          if found
            found[:habit_node_id] = habit_node_id
          else
            # Sub-Habits we created in the ternarisation methods need habits to link to a node
            new_habit = { id: (1000 + habit_node_id), domain_id: index, name: name,
                          initiation_date: (Date.today - days_to_track - 1), habit_node_id: habit_node_id }
            habit_list << new_habit
            habits.insert(new_habit)
          end
          habit_node_id += 1
        end
        trees[index][:default] = current_tree.to_json
      end
      habit_dates_list = []
      domain_habit_lists.each do |habit_list|
        habit_list.each do |habit|
          dates.to_a.each do |date|
            habit_dates.insert({ habit_id: habit[:id], date_id: date[:id], completed_status: false })
          end
        end
      end
    end
    @tree = trees
    @@ready = true
    @@data = { nodes: habit_nodes.to_a, dates: dates.to_a, habit_dates: habit_dates.to_a,
               domains: domains.without_habit_trees, habits: habits.to_a }
  end
end
