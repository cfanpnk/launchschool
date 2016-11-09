# 100.times do |index|
#   if index.odd?
#     puts index
#   end
# end

# 1.upto(99) { |i| puts i if i.odd? }

(1..99).select { |i| puts i if i.odd? }