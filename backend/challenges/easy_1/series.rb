class Series
  attr_reader :digits
  
  def initialize(input)
    @digits = input.chars.map(&to_i)
  end

  def slices(n)
    raise ArgumentError if digits.size < n
    result = []
    digits.each_cons(n) do |e|
      result << e.to_a
    end
    result
  end
end
