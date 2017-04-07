numbers = [5, 9, 21, 26, 39]

divisible_by_three = numbers.select do |element|
                       element % 3 == 0
                     end
p divisible_by_three