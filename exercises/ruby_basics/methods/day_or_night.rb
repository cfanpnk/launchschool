def time_of_day(daylight)
  daylight ? "It's a daytime!" : "It's a nighttime!"
end

daylight = [true, false].sample
puts time_of_day(daylight)