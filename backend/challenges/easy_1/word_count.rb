class Phrase
  attr_accessor :words

  def initialize(words)
    self.words = words.gsub(/[,.!&@$%^&:(\n)]/, ' ').gsub(/ '|' /, ' ').downcase
  end

  def word_count
    counts = Hash.new(0)
    words.split.each do |word|
      counts[word] += 1
    end
    counts
  end
end
