def max_by(array)
  return nil if array.empty?
  max_element = array.first
  max = yield(max_element)
  array.each do |element|
    value = yield(element)
    if value > max
      max = value 
      max_element = element
    end
  end
  max_element
end

puts max_by([1, 5, 3]) { |value| value + 2 } == 5
puts max_by([1, 5, 3]) { |value| 9 - value } == 1
puts max_by([1, 5, 3]) { |value| (96 - value).chr } == 1
puts max_by([[1, 2], [3, 4, 5], [6]]) { |value| value.size } == [3, 4, 5]
puts max_by([-7]) { |value| value * 3 } == -7
puts max_by([]) { |value| value + 5 } == nil