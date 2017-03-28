def step(starting, ending, step)
  counter = starting
  loop do
    yield(counter)
    counter += step
    break if counter > ending
  end
end

step(1, 10, 3) { |value| puts "value = #{value}" }