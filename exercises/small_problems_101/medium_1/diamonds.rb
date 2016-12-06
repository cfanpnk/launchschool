# line 1: 4 spaces + 1 (2 * 1 - 1) stars
# line 2: 3 spaces + 3 (2 * 2 - 1) stars
# line 3: 2 spaces + 5 (2 * 3 - 1) stars
# line 4: 1 spaces + 7 (2 * 4 - 1) stars
# line 5: 0 spaces + 9 (2 * 5 - 1) stars

# line 0: 0 spaces + 9 (n) stars
# line 1: 1 spaces + 7 (n = n - 2) stars
# line 2: 2 spaces + 5 (n = n - 2) stars
# line 3: 3 spaces + 3 (n = n - 2) stars
# line 4: 4 spaces + 1 (n = n - 2) stars


def diamond(n)
  half = n / 2
  line_num = 0
  half.times {
    line_num += 1
    space_num = half - line_num + 1
    star_num = 2 * line_num - 1
    puts " " * space_num + "*" * star_num
  }

  half = n / 2 + 1
  line_num = 0
  half.times {
    space_num = line_num
    star_num = n
    puts " " * space_num + "*" * star_num
    n = n - 2
    line_num += 1
  }
end

diamond(1)
diamond(3)
diamond(9
  )