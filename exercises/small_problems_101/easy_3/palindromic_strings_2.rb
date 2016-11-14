# def real_palindrome?(input)
#   input_array = input.chars
#   new_input_array = []
#   input_array.each do |element|
#     new_input_array.push(element) if alphanumeric?(element)
#   end
#   new_input = new_input_array.join
#   palindrome?(new_input)
# end

# def alphanumeric?(char)
#   chars = ('a'..'z').to_a + ('A'..'Z').to_a + (0..9).to_a
#   chars.include?(char)
# end

def palindrome?(input)
  input.reverse.casecmp(input) == 0
end

def real_palindrome?(string)
  string = string.delete('^a-zA-Z0-9')
  palindrome?(string)
end

puts real_palindrome?('madam') == true
puts real_palindrome?('Madam') == true           # (case does not matter)
puts real_palindrome?("Madam, I'm Adam") == true # (only alphanumerics matter)
puts real_palindrome?('356653') == true
puts real_palindrome?('356a653') == true
puts real_palindrome?('123ab321') == false