class Fixnum
  MAPPING = {"M" => 1000, "CM" => 900, "D" => 500, "CD" => 400,
            "C" => 100, "XC" => 90, "L" => 50, "XL" => 40,
            "X" => 10, "IX" => 9, "V" => 5, "IV" => 4, "I" => 1}.freeze

  def to_roman
    number = self
    roman_numerals = ""
    MAPPING.each do |roman_letter, value|
      number_of_roman_letters = number / value
      roman_numerals += roman_letter * number_of_roman_letters 
      number -= number_of_roman_letters * value
    end
    roman_numerals
  end
end