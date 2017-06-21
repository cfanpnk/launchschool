def fibonacci(num)
  result = [1, 1]
  (3..num).each do 
    result << result[-1] + result[-2]
  end
  result.last
end

p fibonacci(1) == 1
p fibonacci(2) == 1
p fibonacci(3) == 2
p fibonacci(4) == 3
p fibonacci(5) == 5
p fibonacci(12) == 144
p fibonacci(20) == 6765
p fibonacci(100) == 354224848179261915075
p fibonacci(100_001) 