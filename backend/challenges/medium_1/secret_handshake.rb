## Problem
# Input: decimal number (integer)
# Output: array of strings
## Example
# 9 => 1001 => 1 + 1000 => ["wink", "jump"]
# "11001" => 1 + 1000 + 10000 => ["jump", "wink"]
## Data Structure
# Integer => Integer Array => String Array
## Algorithm:
# 1. Convert an integer to binary (string)
#    - 8.to_s(2)
# 2. Convert the binary string into an array
#    - "1001" => [1, 1000]
#    - Map "1001" to [1, 1000]
#    - Read from right to left, skip 0
#    [1, 1, 0, 0, 1].reverse.each_with_index.map do |n, i|
#       n * 10 ** i
#    end.select != 0
# 3. Map the integer array into the string array based on the hash
#    - { 1 => "wink", 10 => "double blink", 100 => "close your eyes", 1000 => "jump" }  
#    - [1, 1000] => ["wink", jump]
#    - If the last element is 10000, reverse the array

class SecretHandshake
  attr_reader :commands, :mapping
  def initialize(number)
    @mapping = { 1 => "wink", 10 => "double blink", 100 => "close your eyes", 1000 => "jump" }
    if (number.is_a?(Integer))
      @commands = convert_binary_string_to_array(number.to_s(2))
    else 
      @commands = convert_binary_string_to_array(number)
    end
  end

  def convert_binary_string_to_array(binary_string)
    @commands = binary_string.split('').reverse.each_with_index.map do |n, i|
      n.to_i * 10 ** i
    end.select { |num| num != 0 }.map do |n|
      if n == 10000
        10000
      else
        mapping[n]
      end
    end
    if @commands[-1] == 10000
      @commands.reverse.drop(1)
    else
      @commands
    end
  end
end

handshake = SecretHandshake.new(4)
p handshake
