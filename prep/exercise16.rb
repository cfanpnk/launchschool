a = ['white snow', 'winter wonderland', 'melting ice',
     'slippery sidewalk', 'salted roads', 'white trees']

b = []
a.each do |element|
  single = element.split(" ")
  b.push(single)
end

p b.flatten