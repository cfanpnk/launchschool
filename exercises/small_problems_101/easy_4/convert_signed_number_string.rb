DIGIT = {0 => '0', 1 => '1', 2 => '2', 3 => '3', 4 => '4', 5 => '5', 6 => '6', 7 => '7', 8 => '8', 9 => '9'}

def integer_to_string(num)
  digits = []
  loop do
    digits.unshift(DIGIT[num % 10])
    num = num / 10
    break if num == 0
  end
  digits.join
end

def signed_integer_to_string(num)
  if num == 0
    '0'
  elsif num < 0
    '-' + integer_to_string(-num)
  else
    '+' + integer_to_string(num)
  end
end


puts signed_integer_to_string(4321) == '+4321'
puts signed_integer_to_string(-123) == '-123'
puts signed_integer_to_string(0) == '0'