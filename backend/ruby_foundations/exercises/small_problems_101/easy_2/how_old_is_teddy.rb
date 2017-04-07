age = rand(180..200)
puts "What's your name?"
name = gets.chomp
name = "Teddy" if name.empty?
puts "#{name} is #{age} years old!"