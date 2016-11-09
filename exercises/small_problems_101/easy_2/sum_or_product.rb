def sum(num)
  (1..num).reduce(:+)
end

def product(num)
  (1..num).reduce(:*)
end


puts ">> Please enter an integer greater than 0:"
number = gets.chomp.to_i
puts ">> Enter 's' to computer the sum, 'p' to compute the product."
choice = gets.chomp

case choice
  when 's'
    puts "The sum of the integers between 1 and #{number} is #{sum(number)}"
  when 'p'
    puts "The product of the integers between 1 and #{number} is #{product(number)}"
end