def reverse_words(string)
  output = []
  string.split(' ').each do |word|
    if word.length >=5
      output.push(word.reverse!)
    else
      output.push(word)
    end
  end
  output.join(' ')
end

puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')         # => hcnuaL loohcS