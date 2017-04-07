def center_of(string)
  string.length.odd? ? string[string.size / 2] : string[string.size / 2 - 1, 2]
end

puts center_of('I love ruby') == 'e'
puts center_of('Launch School') == ' '
puts center_of('Launch') == 'un'
puts center_of('Launchschool') == 'hs'
puts center_of('x') == 'x'