
def each_with_index_test(array)
  i = 0;
  array.each do |item|
    i = i + 1
    puts(i.to_s + ": " + item)
  end
end

elements = ["one", "two", "three", "four"]
each_with_index_test(elements)
elements.each_with_index {|item, index| puts (index+1).to_s + ": " + item}
