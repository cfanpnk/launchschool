def greetings(name, title)
  full_name = name.join(' ')
  full_title = title.values.join(' ')
  puts "Hello, #{full_name} to have a #{full_title} around."
end

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })