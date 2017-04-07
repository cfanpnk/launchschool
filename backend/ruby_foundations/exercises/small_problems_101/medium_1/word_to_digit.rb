  HASH = {"zero" => 0, "one" => 1, "two" => 2, "three" => 3, "four" => 4, "five" => 5, 
        "six" => 6, "seven" => 7, "eight" => 8, "nine" => 9 }

def word_to_digit(string)

  result = string.split(' ').map do |word|
    if word.end_with?('.')
      HASH.has_key?(word.delete('.')) ? HASH[word.delete('.')] : word + '.'
    else
      HASH.has_key?(word) ? HASH[word] : word
    end
  end
  result
end

p word_to_digit('Please call me at five five five one two three four. Thanks.')