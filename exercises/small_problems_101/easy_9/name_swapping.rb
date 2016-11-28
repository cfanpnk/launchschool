def swap_name(full_name)
  name_arr = full_name.split(' ')
  first_name = name_arr[0]
  last_name = name_arr[1]
  "#{last_name}, #{first_name}"
end

puts swap_name('Joe Roberts') == 'Roberts, Joe'