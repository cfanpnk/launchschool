def century(year)
  century = year / 100
  remainder = year % 100
  if remainder > 0
    century += 1
  end
  century.to_s + get_ending(century)
end

def get_ending(century)
  # last_digit = century.to_s.chars.last(1).join.to_i
  # last_two_digit = century.to_s.chars.last(2).join.to_i
  last_digit = century % 10
  last_two_digit = century % 100
  mapping = {1 => 'st', 2 => 'nd', 3 => 'rd', 4 => 'th', 5 => 'th', 6 => 'th', 7 => 'th', 8 => 'th', 9 => 'th', 0 => 'th'}
  exceptions = {11 => 'th', 12 => 'th', 13 => 'th', 14 => 'th', 15 => 'th', 16 => 'th', 17 => 'th', 18 => 'th', 19 => 'th'}
  if exceptions.include?(last_two_digit)
    exceptions[last_two_digit] 
  else
    mapping[last_digit]
  end
end

puts century(2000) == '20th'
puts century(2001) == '21st'
puts century(1965) == '20th'
puts century(256) == '3rd'
puts century(5) == '1st'
puts century(10103) == '102nd'
puts century(1052) == '11th'
puts century(1127) == '12th'
puts century(11201) == '113th'