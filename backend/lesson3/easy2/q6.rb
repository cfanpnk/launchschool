ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }

min_age = 9999

ages.each_pair do |key, value| 
  if value < min_age
    min_age = value
  end
end

puts min_age