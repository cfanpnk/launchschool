MINUTES_PER_HOUR = 60
HOURS_PER_DAY = 24
MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY

def after_midnight(time)
  hour = time[0..1].to_i
  minute = time[3..4].to_i
  (MINUTES_PER_HOUR * hour + minute) % MINUTES_PER_DAY
end

def before_midnight(time)
  delta_minutes = MINUTES_PER_DAY - after_midnight(time)
  delta_minutes = 0 if delta_minutes == MINUTES_PER_DAY
  delta_minutes
end

puts after_midnight('00:00') == 0
puts before_midnight('00:00') == 0
puts after_midnight('12:34') == 754
puts before_midnight('12:34') == 686
puts after_midnight('24:00') == 0
puts before_midnight('24:00') == 0