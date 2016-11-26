# def dms(angle)
#   degree = angle.to_i
#   minute = ((angle - degree).round(6) * 60).to_i
#   second = (((angle - degree).round(6) * 60 - minute).round(6) * 60).to_i
#   "#{degree}°#{format("%02d", minute)}\'#{format("%02d", second)}\""
# end
MINUTESS_PER_DEGREE = 60
SECONDS_PER_MINUTE = 60
SECONDS_PER_DEGREE = MINUTESS_PER_DEGREE * SECONDS_PER_MINUTE

def dms(angle)
  seconds = angle * SECONDS_PER_DEGREE
  degrees, remaining_seconds = seconds.divmod(SECONDS_PER_DEGREE)
  minutes, seconds = remaining_seconds.divmod(SECONDS_PER_MINUTE)
  "#{degrees}°#{format("%02d", minutes)}\'#{format("%02d", seconds)}\""
end

puts dms(76.73) == %(76°43'48")
puts dms(254.6) == %(254°36'00")
puts dms(93.034773) == %(93°02'05")
puts dms(0) == %(0°00'00")
puts dms(360) == %(360°00'00") || dms(360) == %(0°00'00")