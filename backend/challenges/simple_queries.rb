
def query(nums, maxes)
  answer = []

  maxes.each do |max|
    count = 0
    nums.each do |num|
      count += 1 if num <= max
    end
    answer << count
  end
  answer
end


nums = [1, 2, 3]
maxes = [2, 4]
answer = query(nums, maxes)
# answer = [2, 3]
p answer


nums = [1, 4, 2, 4]
maxes = [3, 5]
answer = query(nums, maxes)
# answer = [2, 4]
p answer