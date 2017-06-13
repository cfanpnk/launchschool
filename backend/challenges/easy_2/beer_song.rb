class BeerSong
  def number_of_bottles(num)
    if num > 1
      "#{num} bottles"
    elsif num == 1
      "1 bottle"
    elsif num == 0
      "no more bottles"
    end
  end

  def verse(num)
    if num == 0
      "No more bottles of beer on the wall, no more bottles of beer.\n" \
      "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    elsif num == 1
      "#{number_of_bottles(num)} of beer on the wall, #{number_of_bottles(num)} of beer.\n" \
      "Take it down and pass it around, #{number_of_bottles(num - 1)} of beer on the wall.\n"
    else
      "#{number_of_bottles(num)} of beer on the wall, #{number_of_bottles(num)} of beer.\n" \
      "Take one down and pass it around, #{number_of_bottles(num - 1)} of beer on the wall.\n"
    end
  end

  def verses(*nums)
    min = nums.last
    max = nums.first
    (min..max).to_a.reverse.map { |num| verse(num) }.join("\n")
  end

  def lyrics
    verses(99, 0)
  end
end