require 'Date'

puts "What is your age?"
current_age = gets.chomp.to_i

puts "At what age would you like to retire?"
retire_age = gets.chomp.to_i

gap = retire_age - current_age
this_year = Date.today.year
retire_year = this_year + gap

puts "It's #{this_year}. You will retire in #{retire_year}"
puts "You have only #{gap} years of work to go!"