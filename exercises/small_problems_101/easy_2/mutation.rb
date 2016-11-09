array1 = %w(Moe Larry Curly Chemp Harpo Chico Groucho Zeppo)
array2 = []
array1.each { |value| array2 << value }
# array2 = ["Moe", "Larry", "Curly", "Chemp", "Harpo", "Chico", "Groucho", "Zeppo"]
array1.each { |value| value.upcase! if value.start_with?('C') }
# array1 = ["Moe", "Larry", "CURLY", "CHEMP", "Harpo", "CHICO", "Groucho", "Zeppo"]
p array1
p array2
# array2 = ["Moe", "Larry", "CURLY", "CHEMP", "Harpo", "CHICO", "Groucho", "Zeppo"]

