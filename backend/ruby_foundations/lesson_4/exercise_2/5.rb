flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

first_name_index = 0
flintstones.each_with_index do |item, index|
  if item.start_with?("Be")
    first_name_index = index
  end
end

puts first_name_index