class Pet
  attr_reader :type, :name
  attr_accessor :adopted
  def initialize(type, name)
    @type = type
    @name = name
    @adopted = false
  end

  def to_s
    "a #{type} named #{name}"
  end
end

class Owner
  attr_accessor :name, :number_of_pets

  def initialize(name)
    self.name = name
    @number_of_pets = 0
  end
end

class Shelter
  def initialize
    @adoptions = {}
  end

  def adopt(owner, pet)
    if @adoptions.has_key?(owner.name)
      pets = @adoptions[owner.name]
      pets << pet
      @adoptions[owner.name] = pets
    else
      pets = []
      pets << pet
      @adoptions[owner.name] = pets
    end
    pet.adopted = true;
    owner.number_of_pets = owner.number_of_pets + 1
  end

  def print_adoptions
    puts "The Animal Shelter has the following unadopted pets:"
    ObjectSpace.each_object(Pet) do |pet|
      puts pet if !pet.adopted
    end
    puts 
    @adoptions.each do |owner_name, pets|
      puts "#{owner_name} has adopted the following pets:"
      pets.each { |pet| puts pet }
      puts 
    end
  end
end


butterscotch = Pet.new('cat', 'Butterscotch')
pudding      = Pet.new('cat', 'Pudding')
darwin       = Pet.new('bearded dragon', 'Darwin')
kennedy      = Pet.new('dog', 'Kennedy')
sweetie      = Pet.new('parakeet', 'Sweetie Pie')
molly        = Pet.new('dog', 'Molly')
chester      = Pet.new('fish', 'Chester')
# Unadopted pets
asta         = Pet.new('dog', 'Asta')
laddie       = Pet.new('dog', 'Laddie')
fluffy       = Pet.new('cat', 'Fluffy')
kat          = Pet.new('cat', 'Kat')
ben          = Pet.new('cat', 'Ben')
chatterbox   = Pet.new('parakeet', 'Chatterbox')
bluebell     = Pet.new('parkakeet', 'Bluebell')

phanson = Owner.new('P Hanson')
bholmes = Owner.new('B Holmes')

shelter = Shelter.new
shelter.adopt(phanson, butterscotch)
shelter.adopt(phanson, pudding)
shelter.adopt(phanson, darwin)
shelter.adopt(bholmes, kennedy)
shelter.adopt(bholmes, sweetie)
shelter.adopt(bholmes, molly)
shelter.adopt(bholmes, chester)
shelter.print_adoptions
puts "#{phanson.name} has #{phanson.number_of_pets} adopted pets."
puts "#{bholmes.name} has #{bholmes.number_of_pets} adopted pets."