def staggered_case(string)
  result = string.chars.each_with_index do |letter, index|
    index.odd? ? letter.downcase! : letter.upcase!
  end
  result.join
end

puts staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
puts staggered_case('ALL_CAPS') == 'AlL_CaPs'
puts staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'