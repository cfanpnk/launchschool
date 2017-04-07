def find_fibonacci_index_by_length(length)
  index = 1
  loop do 
    break if fibonacci(index).to_s.length == length
    index = index + 1
  end
  index
end

def fibonacci(index)
  return 1 if index == 1
  return 1 if index == 2
  fibonacci(index - 1) + fibonacci(index - 2)
end



puts find_fibonacci_index_by_length(2)
puts find_fibonacci_index_by_length(10) 
puts find_fibonacci_index_by_length(100)