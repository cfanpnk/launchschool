# 1. parse the string and get an array of words.
# 2. Iterate the array and reverse the even words


class OddWords
  attr_accessor :sentence

  def initialize(sentence)
    @sentence = sentence
  end

  def convert
    return "" if @sentence == ""
    result = []
    @sentence.delete!(".")
    @sentence.split.each_with_index do |word, index|
      if (index + 1).even?
        result << word.reverse
      else
        result << word
      end
    end
    result.join(" ") + "."
  end
end
