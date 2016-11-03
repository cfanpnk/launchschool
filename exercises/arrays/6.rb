numbers = [1, 2, 3, 4, 5]
doubled_numbers = []

doubled_numbers = numbers.map do |element|
                    element * 2
                  end

p doubled_numbers