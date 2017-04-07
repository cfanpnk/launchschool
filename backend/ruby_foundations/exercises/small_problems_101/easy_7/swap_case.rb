def swapcase(string)
  result = string.chars.map do |letter|
    case letter
    when /[a-z]/ 
      letter.upcase
    when /[A-Z]/
      letter.downcase
    else
      letter
    end
  end
  result.join
end

puts swapcase('CamelCase') == 'cAMELcASE'
puts swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'