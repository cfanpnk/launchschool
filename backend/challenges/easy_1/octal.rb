class Octal
  attr_reader :input

  def initialize(input)
    @input = valid?(input) ? input.to_i.digits : [0]
  end

  def to_decimal
    input
      .map.with_index { |digit, index| digit * 8**index }
      .reduce(:+)
  end

  def valid?(input)
    /\A[0-7]+\z/.match?(input)
  end
end
