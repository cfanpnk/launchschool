SQUARE_METERS_TO_FEET = 10.7639

puts "Enter the length of the room in meters:"
length = gets.chomp.to_f
puts "Enter the width of the room in meters:"
width = gets.chomp.to_f

area_meters = length * width
area_feet = length * width * SQUARE_METERS_TO_FEET

puts "The area of the room is #{area_meters} meters (#{area_feet.round(2)}) sqaure feet"
