def all_caps(text)
  if(text.length > 10)
    return text.upcase
  else
    return text
  end
end

puts all_caps("nankai")