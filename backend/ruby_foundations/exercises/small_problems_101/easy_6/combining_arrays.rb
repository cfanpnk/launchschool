def merge(array1, array2)
  array2.each do |element|
    array1.push(element)
  end
  array1.uniq
  array1.
end

p merge([1, 3, 5], [3, 6, 9]) 