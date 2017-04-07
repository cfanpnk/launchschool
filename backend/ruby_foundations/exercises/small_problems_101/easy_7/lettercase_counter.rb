def letter_case_count(string)
  stat = {lowercase: 0, uppercase: 0, neither: 0}
  string.chars.each do |letter|
    case letter
    when /[a-z]/
      stat[:lowercase] += 1
    when /[A-Z]/
      stat[:uppercase] += 1
    else
      stat[:neither] += 1
    end
  end
  return stat
end

puts letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
puts letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
puts letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
puts letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }