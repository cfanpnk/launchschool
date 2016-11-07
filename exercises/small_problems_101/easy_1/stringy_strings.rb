def stringy(num, default = 0)
  results = ''
  num.times do |index|
    results << (index.even? ? '1' : '0') if default == 1
    results << (index.even? ? '0' : '1') if default == 0
  end
  results
end

puts stringy(6)
puts stringy(9)
puts stringy(4)
puts stringy(7)