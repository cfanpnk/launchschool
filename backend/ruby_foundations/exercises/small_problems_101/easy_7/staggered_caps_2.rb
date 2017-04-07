require 'pry'

def staggered_case(string)
  cap_switch = false
  result = string.chars.each do |letter|
    if cap_switch
      letter.downcase!
    else
      letter.upcase!
    end
    cap_switch = !cap_switch if letter =~ /[a-zA-Z]/
  end
  result.join
end


puts staggered_case('I Love Launch School!') == 'I lOvE lAuNcH sChOoL!'
puts staggered_case('ALL CAPS') == 'AlL cApS'
puts staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 nUmBeRs'