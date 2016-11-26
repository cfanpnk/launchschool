def halvsies(array)
  second_array = array.pop(array.size / 2)
  new_array = []
  new_array.push(array)
  new_array.push(second_array)
end

puts halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
puts halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
puts halvsies([5]) == [[5], []]
puts halvsies([]) == [[], []]