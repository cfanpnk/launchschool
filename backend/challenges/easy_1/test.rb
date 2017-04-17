output = [2, 3, 3].each_with_index.each do |(v, i)| 
  p "v=#{v}"
  p "i=#{i}"
end

p output