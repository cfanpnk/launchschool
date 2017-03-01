class Person
  attr_accessor :first_name, :last_name, :name

  def initialize(name)
    @name = name
    parse_full_name(name)
  end

  def name
    @first_name + ' ' + @last_name
  end

  def name=(full_name)
    parse_full_name(full_name)
  end

  def same_name?(other_person)
    other_person.name == self.name
  end

  def to_s
    name
  end

  private

  def parse_full_name(full_name)
    @first_name = full_name.split[0]
    @last_name = full_name.split.size > 1 ? full_name.split[1] : ''
  end
end

# bob = Person.new('Robert')
# puts bob.name                  # => 'Robert'
# puts bob.first_name            # => 'Robert'
# puts bob.last_name             # => ''
# bob.last_name = 'Smith'
# puts bob.name                  # => 'Robert Smith'

# bob.name = "John Adams"
# puts bob.first_name            # => 'John'
# puts bob.last_name             # => 'Adams'

bob = Person.new('Robert Smith')
rob = Person.new('Nankai Pan')

puts bob.same_name?(rob)

bob = Person.new("Robert Smith")
puts "The person's name is: #{bob}"