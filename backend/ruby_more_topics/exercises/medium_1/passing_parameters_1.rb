items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  yield(items)
  puts "Let's start gathering food."
end

gather(items) do |items|
  puts "#{items.join(', ')}"
end