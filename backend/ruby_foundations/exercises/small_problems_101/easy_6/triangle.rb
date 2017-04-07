def triangle(num)
  line = 0
  num.times do |line|
    space_num = num - line
    star_num = line
    puts ' ' * space_num + '*' * star_num
  end
end

triangle(9)