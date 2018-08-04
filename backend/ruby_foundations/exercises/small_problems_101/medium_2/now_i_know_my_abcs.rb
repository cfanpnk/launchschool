# Input: string
# Output: boolean
# 1. Each block can only be used once
# 2. Return false if there are repeated letters in the word
#    Return true otherwise
# Example:
# 'BATCH' => 'OATPU' => true
# 'BUTCH' => 'OUTPU' => false
# Algorithm:
# 1. Convert the word to the new word based on the spelling block mapping
# 2. Determine if there is repeated letter in the new word
#    - If yes, return false
#    - If no, return true
SPELLING_BLOCKS = { 'B' => 'O', 'X' => 'K', 'D' => 'Q', 'C' => 'P', 'N' => 'A',
'G' => 'T', 'R' => 'E', 'F' => 'S', 'J' => 'W', 'H' => 'U',
'V' => 'I', 'L' => 'Y', 'Z' => 'M' }

def block_word?(word)
  letters = []
  new_word = convert_to_new_word(word)
  new_word.split('').each do |letter|
    if letters.include?(letter)
      return false
    else
      letters << letter
    end
  end
  return true
end

def convert_to_new_word(word)
  word.split('').map do |letter|
    SPELLING_BLOCKS[letter.upcase] ?  SPELLING_BLOCKS[letter.upcase] : letter
  end.join('')
end

p block_word?('BATCH')
p block_word?('BUTCH')
