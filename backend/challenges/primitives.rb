## Problem:
# Input:3 lines of strings. First line is a number signifying the number of elelements on the next two lines. The next
# two lines contain values separated by a space
# Output: a hash
## Example:
# 2
# a b
# 1 2
# Output:
# {"a" => "1", "b" => "2"}
## Data structure: string => hash
## Algorithm:
# 1. Read the first line and get the number of elements => n
# 2. Read the second line. Split the string by space => array
# 3. Read the third line. Split the string by space => array
# 4. Create a new hash and loop for n times.
#    - Push into the hash for each element in the 2 arrays
#    - Use the index as the array index
# [a, b], [1, 2]

def convert(firstLine, secondLine, thirdLine)
  numberOfElements = firstLine.to_i
  keysArray = secondLine.split
  valuesArray = thirdLine.split
  result = {}
  numberOfElements.times do |index|
    result[keysArray[index]] = valuesArray[index]
  end 
  result
end

lines = STDIN.read
linesArray = lines.split("\n")
# p linesArray[0]
# p linesArray[1]
# p linesArray[2]
puts convert(linesArray[0], linesArray[1], linesArray[2])
