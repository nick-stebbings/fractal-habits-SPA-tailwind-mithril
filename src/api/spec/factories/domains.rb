# frozen_string_literal: true

FactoryBot.define do
  factory :domain, class: 'Hht::Repos::DomainRepo' do
    sequence :id { 1 }
    name { Faker::Name.unique.name[0...45] }
    description { Faker::ChuckNorris.fact[0...75] }
    rank { 1 }
    hashtag { "##{Faker::Coffee.intensifier}" }
  end
end