require "tilt/erubis"
require "sinatra"
require "sinatra/reloader"

get "/" do
  @files = {}
  directory = Dir.glob('public/**/*').sort_by { |path| File.basename(path)[0].downcase }
  if params['order'] == 'desc' then
    @sort_text = "Sort ascending"
    @sort_link = "/"
    directory = directory.reverse 
  else
    @sort_text = "Sort descending"
    @sort_link = "/?order=desc"
  end
  directory.each do |path|
    if File.file?(path) then
      @files[File.basename(path)] = path
    end
  end
  erb(:home)
end