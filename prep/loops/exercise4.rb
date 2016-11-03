def count_down(number)
  puts number
  if (number == 0)
    return 0
  else 
    return count_down(number - 1)
  end
end

count_down(100)
