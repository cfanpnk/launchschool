def is_odd?(num)
  if num.abs % 2 != 0 && num.to_i == num
    true
  else
    false
  end
end

puts is_odd?(2)    # => false
puts is_odd?(5)    # => true
puts is_odd?(-17)  # => true
puts is_odd?(-8)   # => false
puts is_odd?(7.1)  # => false
puts is_odd?(-5.0) # => true
