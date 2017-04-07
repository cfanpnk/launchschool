def multiply_all_pairs(array1, array2)
  results = []
  array1.product(array2) do |item1, item2|
    results << item1 * item2
  end
  results.sort
end

puts multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]