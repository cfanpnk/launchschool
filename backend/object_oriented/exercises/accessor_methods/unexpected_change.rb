class Person
  def name=(name)
    @first_name = name.split.first
    @last_name = name.split.last
  end

  def name
    "#{@first_name} #{@last_name}"
  end

end

person1 = Person.new
person1.name = 'John Doe'
puts person1.name