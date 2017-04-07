def each_with_object(array, object)
  array.each do |element|
    yield(element, object)
  end
  object
end

result = each_with_object([1, 3, 5], []) do |value, list|
  list << value**2
end
puts result == [1, 9, 25]

result = each_with_object([1, 3, 5], []) do |value, list|
  list << (1..value).to_a
end
puts result == [[1], [1, 2, 3], [1, 2, 3, 4, 5]]

result = each_with_object([1, 3, 5], {}) do |value, hash|
  hash[value] = value**2
end
puts result == { 1 => 1, 3 => 9, 5 => 25 }

result = each_with_object([], {}) do |value, hash|
  hash[value] = value * 2
end
puts result == {}