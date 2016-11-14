def oddities(array)
  new_array = []
  array.each_index do |index| 
    new_array.push(array[index]) if index.even?
  end
  new_array
end

puts oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
puts oddities(['abc', 'def']) == ['abc']
puts oddities([123]) == [123]
puts oddities([]) == []