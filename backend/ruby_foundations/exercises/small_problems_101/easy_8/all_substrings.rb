def substrings_at_start(string)
  results = []
  loop do 
    results.push(string)
    string = string.chop
    break if string.length == 0
  end
  results.sort
end

def substrings(string)
  results = []
  loop do
    results << substrings_at_start(string)
    string = string[1..-1]
    break if string.size == 0
  end
  results.flatten
end

puts substrings('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde', 
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]