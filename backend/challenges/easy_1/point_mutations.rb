class DNA
  attr_accessor :sequence
  
  def initialize(sequence)
    self.sequence = sequence
  end

  def hamming_distance(other_sequence)
    count = 0
    shorter_sequence = shorter(sequence, other_sequence)
    longer_sequence = longer(sequence, other_sequence)
    shorter_sequence.chars.each_with_index do |letter, index|
      count += 1 if letter != longer_sequence.chars[index]
    end
    count
  end

  def shorter(sequence, other_sequence)
    return sequence if sequence.size <= other_sequence.size
    other_sequence
  end

  def longer(sequence, other_sequence)
    return sequence if sequence.size > other_sequence.size
    other_sequence
  end
end
