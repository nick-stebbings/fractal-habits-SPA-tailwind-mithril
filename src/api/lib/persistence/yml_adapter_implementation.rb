require 'rom'
require 'pry'
require 'rom-yaml'
path = "dummyData.yml"

config = ROM::Configuration.new(:yaml, path)

class Domain < ROM::Relation[:yaml]
  schema(:domains) do
    attribute :id, ROM::Types::String
    attribute :name, ROM::Types::String
    attribute :habits, ROM::Types::Array
  end

  auto_struct true

  def by_name(name)
    restrict(name: name)
  end
end

# class Habit < ROM::Relation[:yaml]
#   schema(:habits) do
#     attribute :id, Types::Integer
#     attribute :name, Types::String
#   end

#   auto_struct true
# end
# config.register_relation(Habit)

config.register_relation(Domain)
rom = ROM.container(config) 
# do |setup|
#   setup.relation(Domain)
#   setup.relation(Habit)

#   define(:domains) do
#     register_as :entity

#     model name: 'Domain'
#     attribute :id, Types::Integer
#     attribute :name, Types::String

#     embedded :sports, type: :hash do
#       attribute :name, from: 'name'
#     end
#   end
# end

Pry.start
# puts rom.relations[:domains].by_name('sports').first

#     users:
    # - name: 'Jane'
    #   email: 'jane@doe.org'
    #   roles:
    #     - role_name: 'Member'
    #     - role_name: 'Admin'