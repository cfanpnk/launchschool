flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

index = 0
new_flintstones = flintstones.each_with_object({}) do |item, hash|
  hash[item] = index
  index += 1
end

p new_flintstones

