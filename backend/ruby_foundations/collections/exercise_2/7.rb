statement = "The Flintstones Rock"

freq = {}
statement.delete(" ").chars.each do |char|
  freq.has_key?(char) ? freq[char] += 1 : freq[char] = 1
end

p freq