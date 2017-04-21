class Anagram
  attr_reader :original_word, :letter_frequency

  def initialize(word)
    @original_word = word.downcase
    @letter_frequency = count_letter(word.downcase)
  end

  def match(array)
    array.select { |word| anagram?(word.downcase) && !identical?(word) }
  end

  def count_letter(word)
    frequency = {}
    word.chars do |char|
      if frequency.key?(char)
        frequency[char] += 1
      else
        frequency[char] = 1
      end
    end
    frequency
  end

  def identical?(word)
    word.downcase == original_word
  end

  def anagram?(word)
    count_letter(word) == letter_frequency
  end
end
