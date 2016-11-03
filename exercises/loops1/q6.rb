numbers = (0..99).to_a
count = 0

while 
  count += 1
  puts numbers.sample
  break if count == 5
end