def get_middle(s)
  s[length / 2] if s.size.odd?
  # return s.slice(length / 2 -1, 2) if s.length.even?
end

p get_middle('abc')

