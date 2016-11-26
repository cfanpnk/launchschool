def interleave(array1, array2)
  array1.each_index do |index|
    array2.insert(index * 2, array1[index])
  end
  array2
end

p interleave([1, 2, 3], ['a', 'b', 'c'])