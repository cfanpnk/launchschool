def double?(num)
  length = num.to_s.length 
  half_length = length / 2
  left_side = num.to_s[0, half_length]
  right_side = num.to_s[half_length, half_length]
  left_side == right_side && length.even?
end

def twice(num)
  double?(num) ? num : num * 2
end

puts twice(37) == 74
puts twice(44) == 44
puts twice(334433) == 668866
puts twice(444) == 888
puts twice(107) == 214
puts twice(103103) == 103103
puts twice(3333) == 3333
puts twice(7676) == 7676
puts twice(123_456_789_123_456_789) == 123_456_789_123_456_789
puts twice(5) == 10