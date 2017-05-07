class User
  attr_writer :name
end

class Something
  attr_accessor :person
end

class Person < Something
  attr_accessor :name

  def initialize(n)
    @name = n
    person = User.new
  end

  def change_name(n)
    person.name = n
  end
end

bob = Person.new("Bob")
bob.change_name("Robert")
puts bob.name