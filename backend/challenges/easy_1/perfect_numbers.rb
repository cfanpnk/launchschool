class PerfectNumber
  def self.factors(number)
    factors = []
    1.upto(number - 1) do |num|
      factors << num if number % num == 0
    end
    factors
  end

  def self.classify(number)
    raise "The input must be a positive integer" if number <= 0
    sum_of_factors = factors(number).reduce(:+)
    if sum_of_factors == number
      "perfect"
    elsif sum_of_factors > number
      "abundant"
    else
      "deficient"
    end
  end
end
