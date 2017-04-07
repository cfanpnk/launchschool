def time_of_day(num)
  num = num % 1440
  num += 1440 if num < 0
  hour, minute = num.divmod(60)
  format("%02d:%02d", hour, minute)
end

puts time_of_day(0) == "00:00"
puts time_of_day(-3) == "23:57"
puts time_of_day(35) == "00:35"
puts time_of_day(-1437) == "00:03"
puts time_of_day(3000) == "02:00"
puts time_of_day(800) == "13:20"
puts time_of_day(-4231) == "01:29"