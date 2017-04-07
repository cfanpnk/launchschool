def rotate_array(array)
  new_array = array.clone
  new_array << new_array.shift
end

def rotate_rightmost_digits(num, digit)
  length = num.to_s.length
  index = length - digit
  prefix_index = length - digit - 1

  num_array = num.to_s.chars.to_a
  if prefix_index == -1
    non_rotated = ''
  else
    non_rotated = num_array[0..prefix_index].join
  end
  rotated = rotate_array(num_array[index, digit]).join
  (non_rotated + rotated).to_i
end

def max_rotation(num)
  length = num.to_s.length
  length.downto(2) do |digit|
    num = rotate_rightmost_digits(num, digit)
  end
  num
end

puts max_rotation(735291) == 321579
puts max_rotation(3) == 3
puts max_rotation(35) == 53
puts max_rotation(105) == 15 
puts max_rotation(8_703_529_146) == 7_321_609_845
