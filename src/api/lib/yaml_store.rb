class YAMLStore
  attr_reader :domains, :habits, :dates, :habit_dates, :habit_nodes
  @@yaml = Hht::Container.resolve('yaml.yaml_container')
  @@ready = false
  @@data = nil

  def initialize(days_to_track)
    @domains = @@yaml.relations.domains
    @habits = @@yaml.relations.habits
    @dates = @@yaml.relations.dates
    @habit_dates = @@yaml.relations.habit_dates
    @habit_nodes = @@yaml.relations.habit_nodes
    @@data = populate_yaml_relations(days_to_track)
    @@ready = true
  end

  def self.ready
    @@ready
  end

  def self.get_data
    @@data
  end

  def populate_yaml_relations(days_to_track)
    #TODO refactor
    if @dates.to_a.empty? && habit_dates.to_a.empty? && habit_nodes.to_a.empty?
      date_range = ((Date.today- (days_to_track - 1)) .. Date.today)
      date_structs = date_range.each_with_index { |date, i| @dates.insert({h_date: date, id: i + 1})}
      domain_habit_lists = []
      habit_list = []
      habit_id = 1
      domain_list = domains.to_a.each_with_object([]) do |domain, list|
        # domains.insert({ id: domain.id, name: domain.name, habits: [] })
        habit_names = domain.habits.to_s.scan(/:name=>"(.*?)"/) #.gsub(/(\\|\\n|\\t)/, '')
        
        domain_habit_lists << habit_names.each_with_object([]) do |habit_name, list|
          habit = { id: habit_id, domain_id: domain.id, name: habit_name.first, initiation_date: (Date.today - days_to_track - 1) }
          list << habit
          habit_list << habit
          habits.insert(habit)
          habit_id += 1
        end
      end

      tree = nil
      habit_node_id = 1
      habit_nodes_list = []
      domains.to_habit_trees.each_with_index do |domain, index|
        tree = Subtree.json_to_ternarised_and_listified_treenodes(domain.to_json)
        tree.yield_d3_values(index) do |vals, name|
          new_habit = {id: habit_node_id, lft: vals[:lft], rgt: vals[:rgt], domain_id: index}
          habit_nodes.insert({id: habit_node_id, lft: vals[:lft], rgt: vals[:rgt], domain_id: index})
          found = habit_list.find { |habit| habit[:name] == name}
          next unless found
          found[:habit_node_id] = habit_node_id
          habit_node_id += 1
        end
      end
      habit_dates_list = []
      domain_habit_lists.each do |habit_list|
        habit_list.each do |habit|
          dates.to_a.each do |date|
            habit_dates.insert({habit_id: habit[:id], date_id: date[:id], status_completed: false})
          end
        end
      end
    end
    @@ready = true
    @@data = { tree: tree, nodes: habit_nodes.to_a, dates: dates.to_a, habit_dates: habit_dates.to_a, domains: domains.without_habit_trees, habits: habits.to_a }
  end
end