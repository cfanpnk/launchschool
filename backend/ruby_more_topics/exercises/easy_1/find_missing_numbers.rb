def missing(sorted_array)
  missing_array = []
  sorted_array.min.upto(sorted_array.max) do |element|
    missing_array << element if !sorted_array.include?(element)
  end
  missing_array
end

puts missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
puts missing([1, 2, 3, 4]) == []
puts missing([1, 5]) == [2, 3, 4]
puts missing([6]) == []