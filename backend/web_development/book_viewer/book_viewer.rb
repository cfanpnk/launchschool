require "tilt/erubis"
require "sinatra"
require "sinatra/reloader" if development?

helpers do
  def in_paragraphs(text)
    text.split("\n\n")
      .map.with_index { |paragraph, index| "<p id='#{index}'>#{paragraph}</p>" }
      .join(" ")
  end

  def highlight(text, keyword)
    text.gsub(keyword, "<strong>#{keyword}</strong>")
  end
end

before do
  @toc = File.readlines("data/toc.txt")
end

def search(keyword)
  results = {}

  return results if keyword == nil
  Dir.glob("data/*.txt").each do |file|
    next if !file.include?('chp')
    chapter = File.read(file)

    number = File.basename(file).match(/\d+/)[0]
    title = @toc[number.to_i - 1]

    sub_results = {}
    sub_results = results[title] if results.has_key?(title)

    chapter.split("\n\n").each_with_index do |paragraph, index|
      path = "/chapters/#{number}##{index}"
      if paragraph.include?(keyword) then
        sub_results[path] = paragraph 
      end
    end

    if !sub_results.empty? then
      results[title] = sub_results
    end
  end
  results
end

get "/" do
  @title = "The Adventures of Sherlock Holmes"
  erb :home
end

get "/chapters/:number" do
  number = params[:number]
  @title = "Chapter #{number} #{@toc[number.to_i - 1]}"
  @chapter = File.read("data/chp#{number}.txt")
  erb :chapter
end    

get "/show/:name" do
  params[:name]
end

get "/search" do
  keyword = params[:query]
  @results = search(keyword)
  erb :search
end

not_found do
  redirect "/"
end