def multiply(num1, num2)
  num1 * num2
end

def square(num)
  multiply(num, num)
end

def power(num, factor)
  results = num
  (factor - 1).times do 
    results = multiply(results, num)
  end
  results
end

puts square(5) == 25
puts square(-8) == 64

puts power(2, 3)