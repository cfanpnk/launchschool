def prompt(msg)
  puts "=> #{msg}"
end

prompt("Enter a noun:")
noun = gets.chomp
prompt("Enter a verb:")
verb = gets.chomp
prompt("Enter an adjective: blue")
adj = gets.chomp
prompt("Enter an adverb:")
adv = gets.chomp

puts "Do you #{verb} your #{adj} #{noun} quickly? That's hilarious!"