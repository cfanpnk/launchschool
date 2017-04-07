def cleanup(words)
  new_words = words.downcase.chars.map do |char|
    ('a'..'z').include?(char) ? char : ' '
  end
  new_words.join.squeeze
end

puts cleanup("---what's my +*& line?") == ' what s my line '