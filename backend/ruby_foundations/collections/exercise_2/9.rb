def titleize(sentence)
  title = sentence.split.map do |word|
    word.capitalize
  end
  title.join(" ")
end

words = "the flintstones rock"
p titleize(words)