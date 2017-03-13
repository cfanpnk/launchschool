class Person
  attr_accessor :name
end

person1 = Person.new
person1.name = "Nankai"
puts person1.name

def change_name(person)
  person.name = "Naveed"
end

change_name(person1)
puts person1.name
