class SumOfMultiples
  DEFAULT_FACTORS = [3, 5]
  attr_accessor :factors

  def initialize(*factors)
    self.factors = factors
  end

  def self.to(limit)
    new(*DEFAULT_FACTORS).to(limit)
  end

  def to(limit)
    multiples = [0]
    1.upto(limit - 1) do |number|
      multiples << number if factors.any? { |factor| number % factor == 0 }
    end
    multiples.reduce(:+)
  end
end
