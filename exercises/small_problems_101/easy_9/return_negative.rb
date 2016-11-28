def negative(num)
  num > 0 ? -num : num
end

puts negative(5) == -5
puts negative(-3) == -3
puts negative(0) == 0