sun = ['visible', 'hidden'].sample

puts sun
puts "The clouds are blocking the sun!" unless sun == 'visible'