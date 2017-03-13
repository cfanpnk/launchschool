munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" }
}

total_male_age = 0
munsters.each do |name, details|
  if details["gender"] == "male"
    total_male_age += details["age"]
  end
end

puts total_male_age