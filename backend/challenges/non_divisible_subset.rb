##Problem:
# Input: 2 lines
# Output: a number
# 1. Given an array
# 2. Get the maximal sub array where the sum of any 2 numbers cannot be evenly divided by k
## Example:
# 4 3
# 1 7 2 4
# Data structure: array => array
## Algorithm:
# 1. Get all subsets of the array order by the size of the array
#    - n.times |index| do
#        n - index
#      end
#    - array.combination.to_a(n)
#    - array.combination.to_a(n - 1)
# 2. Loop through all arrays
#    - For each array, get all subsets with 2 elements 
#      array.combination(2)
#    - For each sub array, get the sum.
#    - If the sum can be evenly divisible by k, skip to the next array
# {1, 7, 2, 4}
# subsets: 4 => [1, 7, 2, 4]
#            => [1, 7], [1, 2], [1, 4], [7, 2], [7, 4], [2, 4]
#            => 8 / 3 ok
#            => 3 / 3 not okay, exit the loop
#          3 => [[1, 7, 2], [1, 7, 4], [1, 2, 4], [7, 2, 4]]
# [1, 7 , 2] => [1, 7], [1, 2], [7, 2]
#            => 8, 3, 9

