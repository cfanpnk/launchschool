def multisum(num)
  elements = (1..num).select { |element|  element % 3 == 0 || element % 5 == 0 }
  elements.reduce(:+)
end

puts multisum(3) == 3
puts multisum(5) == 8
puts multisum(10) == 33
puts multisum(1000) == 234168