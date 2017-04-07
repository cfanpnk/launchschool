def buy_fruit(fruit_array)
  fruits = []
  fruit_array.each do |fruit, quantity|
    fruits << [fruit] * quantity
  end
  fruits.flatten
end

puts buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
  ["apples", "apples", "apples", "orange", "bananas","bananas"]