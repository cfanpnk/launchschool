first_name = 'John'
last_name = 'Doe'

# full_name = first_name + ' ' + last_name
# puts full_name

# full_name = first_name.concat(' ' + last_name)
# puts full_name 

full_name = last_name.prepend(first_name + ' ')
puts full_name