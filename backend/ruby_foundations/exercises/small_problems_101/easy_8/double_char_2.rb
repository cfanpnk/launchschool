
def double_consonants(string)
  result = ''
  string.each_char do |char|
    case char
    when /[[a-z]&&[^aeiou]]/i
      result << char * 2
    else
      result << char
    end
  end
  result
end

puts double_consonants('String') == "SSttrrinngg"
puts double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
puts double_consonants("July 4th") == "JJullyy 4tthh"
puts double_consonants('') == ""