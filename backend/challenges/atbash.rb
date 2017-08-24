  MAX = ("a".ord + "z".ord).freeze

  def self.encode(input)
    result = ""
    input.delete(" ").downcase.each_char do |char|
      case char
      when "a".."z"
        result << (MAX - char.ord).chr
      when "0".."9"
        result << char
      end
    end
    format(result)
  end

  private_class_method def self.format(result)
    index = 0
    formatted_result = ""
    result.each_char do |char|
      index += 1
      formatted_result << char
      formatted_result << " " if index % 5 == 0 && index < result.size
    end
    formatted_result
  end
end
