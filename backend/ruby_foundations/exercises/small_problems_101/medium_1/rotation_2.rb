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

puts rotate_rightmost_digits(735291, 1) == 735291
puts rotate_rightmost_digits(735291, 2) == 735219
puts rotate_rightmost_digits(735291, 3) == 735912
puts rotate_rightmost_digits(735291, 4) == 732915
puts rotate_rightmost_digits(735291, 5) == 752913
puts rotate_rightmost_digits(735291, 6) == 352917