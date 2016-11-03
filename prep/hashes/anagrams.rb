words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']

# 1. Iterate the words array
# 2. For each word, split it to an array and sort it
# 3. Creash a hash (key: string, value: array) to store the results
#    - If key exists, add to the value array
#    - If key does not exist, create a new key and add the value to the new key
results = {}
words.each do |word|
  sorted_word = word.split('\\').sort.join
  if (results.has_key?(sorted_word))
    results[sorted_word].push(word)
  else
    results[sorted_word] = [word]
  end
end

results.each_value do |value|
  p value
end
