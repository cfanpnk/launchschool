def categorize(array)
  yield(array)
end

birds = %w(raven finch hawk eagle)
categorize(birds) do |_, _, *birds_of_prey|
  p birds_of_prey
end 