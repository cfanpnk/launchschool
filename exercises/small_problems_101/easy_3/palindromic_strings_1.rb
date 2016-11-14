def palindrome?(input)
  input.reverse == input
end

# def palindrome?(sentence)
#   input = sentence.split(%r{\s*})  
#   reverse_input = []
#   loop do
#     reverse_input.push(input.pop)
#     break if input.size == 0
#   end
#   reverse_input == sentence.split(%r{\s*})  
# end


puts palindrome?('madam') == true
puts palindrome?('Madam') == false          # (case matters)
puts palindrome?("madam i'm adam") == false # (all characters matter)
puts palindrome?('356653') == true