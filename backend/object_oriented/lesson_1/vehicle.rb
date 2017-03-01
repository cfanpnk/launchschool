module Towable
  def can_tow?(pounds)
    pounds < 2000 ? true : false
  end
end

class Vehicle
  attr_accessor :color
  attr_reader :year
  attr_reader :model

  @@number_of_vehicles = 0

  def self.gas_mileage(glallons, miles)
    puts "#{miles / gallons} miles per gallon of gas"
  end

  def initialize(year, model, color)
    @year = year
    @model = model
    @color = color
    @current_speed = 0
    @@number_of_vehicles += 1
  end

  def self.get_number_of_vehicles
    @@number_of_vehicles
  end

  def speed_up(numer)
    @current_speed += number
    puts "You push the gas and accerlerate #{number} mph"
  end

  def break(number)
    @current_speed -= number
    puts "You push the break and decelerate #{number} mph"
  end

  def current_speed
    puts "You are now going #{@current_speed} mph"
  end

  def shut_down
    @current_speed = 0
  end

  def spray_paint(color)
    self.color = color
  end

  def age
    calculate_age
  end

  private

  def calculate_age
    Time.now.year - @year.to_i
  end

end 

class MyCar < Vehicle
  NUMBER_OF_DOORS = 4
  def to_s
    "My car is a #{color} #{year}, #{model}"
  end
end

class MyTruck < Vehicle
  include Towable
  NUMBER_OF_DOORS = 2
  def to_s
    "My truck is a #{color} #{year}, #{model}"
  end
end

car = MyCar.new('2010', 'Ford Focus', 'silver')
truck = MyTruck.new('2010', 'Ford Tundra', 'while')

# puts truck.can_tow?(3400)
# puts truck.can_tow?(1400)

puts car.age