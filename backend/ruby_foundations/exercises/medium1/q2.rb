statement = "The Flintstones Rock".split('')

frequency = Hash.new
statement.each do |element|
  if frequency.has_key?(element)
    frequency[element] = frequency[element] + 1
  else 
    frequency[element] = 1
  end
end

p frequency