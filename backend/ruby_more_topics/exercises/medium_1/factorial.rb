factorial = Enumerator.new do |y|
  n = 2
  result = 1
  loop do 
    y << result
    result = result * n
    n += 1
  end
end

counter = 0
loop do
  counter += 1
  puts factorial.next
  break if counter == 5
end

factorial.rewind

counter = 0
factorial.each do |factor|
  puts factor
  counter += 1
  break if counter == 5
end