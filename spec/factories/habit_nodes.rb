# frozen_string_literal: true

FactoryBot.define do
  factory :habit_node, class: 'Hht::Repos::HabitNodeRepo' do
    id { 69 }
    lft { 14 }
    rgt { 15 }
    parent_id { 68 }
  end

  factory :new_root_node, class: 'Hht::Repos::HabitNodeRepo' do
    parent_id { nil }
  end

  factory :root_only_node, class: 'Hht::Repos::HabitNodeRepo' do
    id { 1 }
    lft { 1 }
    rgt { 2 }
    parent_id { nil }
  end

  factory :new_parent_node, class: 'Hht::Repos::HabitNodeRepo' do
    id { 1 }
    lft { 1 }
    rgt { 2 }
    parent_id { nil }
  end

  factory :new_child_node, class: 'Hht::Repos::HabitNodeRepo' do
    lft { nil }
    rgt { nil }
    parent_id { 1 }
  end

  # Tree of 2
  factory :parent_of_one_node, class: 'Hht::Repos::HabitNodeRepo' do
    id { 1 }
    lft { 1 }
    rgt { 4 }
    parent_id { nil }
  end

  # Tree of 3
  factory :parent_of_two_node, class: 'Hht::Repos::HabitNodeRepo' do
    id { 1 }
    lft { 1 }
    rgt { 6 }
    parent_id { nil }
  end

  factory :first_child_node, class: 'Hht::Repos::HabitNodeRepo' do
    id { 6 }
    lft { 2 }
    rgt { 3 }
    parent_id { 1 }
  end

  factory :second_child_node, class: 'Hht::Repos::HabitNodeRepo' do
    id { 7 }
    lft { 4 }
    rgt { 5 }
    parent_id { 1 }
  end
end
