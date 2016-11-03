elements = {  :one => "1",
            :two => "2",
            :three => "3",
            :four => "4"
          }

elements.each_key do |key|
  puts key
end

elements.each_value do |value|
  puts value
end

elements.each do |key, value|
  puts key.to_s + ": " + value.to_s
end

