# frozen_string_literal: true

FactoryBot.define do
  factory :domain, class: 'Hht::Repos::DomainRepo' do
    sequence :id { |n| n }
    name { Faker::Name.unique.name }
    description { Faker::ChuckNorris.fact }
    rank { 1 }
    hashtag { "##{Faker::Coffee.intensifier}" }
  end
end