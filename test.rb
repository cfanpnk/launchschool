require 'find'

Find.find('.') do |path|
  puts path
end
