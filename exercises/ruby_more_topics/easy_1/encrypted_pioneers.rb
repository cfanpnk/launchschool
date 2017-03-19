def decrypt(name)
  result = ""
  name.each_char do |char|
    case char
    when 'A'..'M', 'a'..'m'
      result << (char.ord + 13).chr
    when 'N'..'Z', 'n'..'z'
      result << (char.ord - 13).chr
    when " "
      result << char
    end
  end
  result
end

puts decrypt("Nqn Ybirynpr")
puts decrypt("Tenpr Ubccre")
puts decrypt("Nqryr Tbyqfgvar")
puts decrypt("Nyna Ghevat")
puts decrypt("Puneyrf Onoontr")
puts decrypt("Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv")
puts decrypt("Wbua Ngnanfbss")
puts decrypt("Ybvf Unyog")
puts decrypt("Pynhqr Funaaba")
puts decrypt("Fgrir Wbof")
puts decrypt("Ovyy Tngrf")
puts decrypt("Gvz Orearef-Yrr")
puts decrypt("Fgrir Jbmavnx")
puts decrypt("Xbaenq Mhfr")
puts decrypt("Wbua Ngnanfbss")
puts decrypt("Fve Nagbal Ubner")
puts decrypt("Zneiva Zvafxl")
puts decrypt("Lhxvuveb Zngfhzbgb")
puts decrypt("Unllvz Fybavzfxv")
puts decrypt("Tregehqr Oynapu")