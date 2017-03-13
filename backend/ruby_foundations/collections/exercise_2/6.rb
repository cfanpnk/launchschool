flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

flintstones.map! do |item|
  item[0..2]
end

p flintstones