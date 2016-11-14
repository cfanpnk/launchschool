def short_long_short(string1, string2)
  long = string1.length > string2.length ? string1 : string2
  short = string1.length < string2.length ? string1 : string2
  short + long + short
end

puts short_long_short('abc', 'defgh') == "abcdefghabc"
puts short_long_short('abcde', 'fgh') == "fghabcdefgh"
puts short_long_short('', 'xyz') == "xyz"

