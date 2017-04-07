def sequence(num)
  result = []
  1.upto(num) do |element|
    result << element
  end
  result
end

puts sequence(5) == [1, 2, 3, 4, 5]
puts sequence(3) == [1, 2, 3]
puts sequence(1) == [1]