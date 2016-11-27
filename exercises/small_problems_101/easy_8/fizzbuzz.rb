def fizzbuzz(starting, ending)
  result = []
  starting.upto(ending) do |number|
    if number % 3 == 0 && number % 5 == 0
      result << 'FizzBuzz'
    elsif number % 3 == 0
      result << 'Fizz'
    elsif number % 5 == 0
      result << 'Buzz'
    else
      result << number
    end
  end
  result
end

p fizzbuzz(1, 15)