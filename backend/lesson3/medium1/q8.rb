def titleize(input)
  title = input.split(' ')
  title.map! do |word|
    word.capitalize
  end
  title.join(' ')
end

puts titleize("this is nankai pan")