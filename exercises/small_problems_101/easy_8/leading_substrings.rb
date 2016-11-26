def substrings_at_start(string)
  results = []
  loop do 
    results.push(string)
    string = string.chop
    break if string.length == 0
  end
  results.sort
end

puts substrings_at_start('abc') == ['a', 'ab', 'abc']
puts substrings_at_start('a') == ['a']
puts substrings_at_start('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']