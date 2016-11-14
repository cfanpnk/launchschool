puts "Please write word or multiple words:"
words = gets.chomp
count = words.delete(" ").size

puts "There are #{count} characters in \"#{words}\""