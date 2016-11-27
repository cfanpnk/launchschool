def repeater(string)
  result = ''
  string.chars.each do |letter|
    result << letter * 2
  end
  result
end

puts repeater('Hello') == "HHeelllloo"
puts repeater("Good job!") == "GGoooodd  jjoobb!!"
puts repeater('') == ''