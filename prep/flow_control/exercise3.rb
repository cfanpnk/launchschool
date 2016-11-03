def range(num)
  case 
  when num <= 50
    puts "This num is between 0 and 50"
  when num <= 100
    puts "This num is between 51 and 100"
  else 
    puts "This num is above 100"
  end
end

range(51)