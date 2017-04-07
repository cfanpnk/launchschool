def multiply_list(array1, array2)
  results = []
  array1.each_index do |index|
    results << array1[index] * array2[index]
  end
  results
end

puts multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]