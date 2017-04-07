def each_cons(array)
  index = 0
  loop do
    yield(array[index], array[index + 1])
    index += 1
    break if index == array.size - 1
  end
end

hash = {}
result = each_cons([1, 3, 6, 10]) do |value1, value2|
  hash[value1] = value2
end

puts result == nil
puts hash == { 1 => 3, 3 => 6, 6 => 10 }