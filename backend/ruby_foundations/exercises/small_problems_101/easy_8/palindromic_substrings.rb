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

def palindrome?(string)
  string == string.reverse and string.size > 1
end

def palindromes(string)
  all_substrings = substrings(string)
  results = []
  all_substrings.each do |word|
    results << word if palindrome?(word)
  end
  results
end

puts palindromes('abcd') == []
puts palindromes('madam') == ['madam', 'ada']
puts palindromes('hello-madam-did-madam-goodbye') == [
  'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo'
]
puts palindromes('knitting cassettes') == [
  'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
]
