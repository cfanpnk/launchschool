def longest_sentence(filename)
  max_word_count = 0
  longest_sentence_index = 0

  File.open(filename) do |file|
    contents = file.read
    sentences = contents.split(/[.!?]/)
    sentences.each_with_index do |sentence, index|
      word_count = 0
      sentence.split(" ").each do |word|
        word_count += 1
      end
      if word_count > max_word_count
        max_word_count = word_count
        longest_sentence_index = index
      end
    end
    puts sentences[longest_sentence_index].strip
  end
  max_word_count
end

puts longest_sentence("longest_sentence_test_2.txt")