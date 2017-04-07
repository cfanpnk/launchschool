def print_in_box(sentence)
  puts "+-#{'-' * sentence.size}-+"
  puts "| #{' ' * sentence.size} |"
  puts "| #{sentence} |"
  puts "| #{' ' * sentence.size} |"
  puts "+-#{'-' * sentence.size}-+"
end

print_in_box('To boldly go where no one has gone before.')