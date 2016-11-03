def prompt(message)
  puts("=> #{message}")
end

def valid_number?(num)
  if num.to_i.to_s == num || num.to_f.to_s == num
    true
  else
    false
  end
end

loop do
  p = ''
  j = ''
  n = ''
  loop do
    puts 'What is your loan amount'
    p = gets.chomp
    if valid_number?(p)
      break
    else
      prompt("Sorry, this doesn't look like a valid number")
    end
  end

  loop do
    puts 'What is your monthly interest rate?'
    j = gets.chomp
    if valid_number?(j)
      break
    else
      prompt("Sorry, this doesn't look like a valid number")
    end
  end

  loop do
    puts 'What is your loan duration in months?'
    n = gets.chomp
    if valid_number?(n)
      break
    else
      prompt("Sorry, this doesn't look like a valid number")
    end
  end

  m = p.to_i * (j.to_f / (1 - (1 + j.to_f)**-n.to_i))
  puts "Your monthly payment is: #{m}"

  puts "Would you like to calculate for another loan? (Y/N)"
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end
