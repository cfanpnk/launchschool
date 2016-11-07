def count_occurrences(array)
  results = {}
  array.each do |element|
    if results.has_key?(element)
      results[element] += 1
    else
      results[element] = 1
    end
  end
  results.each_pair do |key, value|
    puts "#{key} => #{value}"
  end
end

vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck']
count_occurrences(vehicles)
