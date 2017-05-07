  keyword = "the"
  results = {}
  directory =  Dir.glob("data/*.txt")
  directory.each do |file|
    next if file.include?('toc')
    chapter = File.read(file)
    number = File.basename(file).match(/\d+/)[0]
    if number == nil then
      p file
    end
    # p number
    title = @toc[number.to_i - 1]
    # results[file] = title if chapter.include?(keyword)
  end