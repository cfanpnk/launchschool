def get_grade(score1, score2, score3)
  average = (score1 + score2 + score3) / 3.to_f
  case average
  when (90..100)
    "A"
  when (80...90)
    "B"
  when (70...80)
    "C"
  when (60...70)
    "D"
  when (0...60)
    "F"
  end
end

puts get_grade(95, 90, 93) == "A"
puts get_grade(50, 50, 95) == "D"