
def drop_while(array)
  index = 0
  loop do
    break if index > array.size - 1
    if yield(array[index]) == true
      index += 1
    else
      break
    end
  end
  array[index..-1]
end

puts drop_while([1, 3, 5, 6]) { |value| value.odd? } == [6]
puts drop_while([1, 3, 5, 6]) { |value| value.even? } == [1, 3, 5, 6]
drop_while([1, 3, 5, 6]) { |value| true } == []
puts drop_while([1, 3, 5, 6]) { |value| false } == [1, 3, 5, 6]
puts drop_while([1, 3, 5, 6]) { |value| value < 5 } == [5, 6]
puts drop_while([]) { |value| true } == []