require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"
require "redcarpet"
require "pry"

project_root_path = File.expand_path("..", __FILE__)

configure do
  enable :sessions
  set :session_secret, 'secret'
end

def data_path
  if ENV["RACK_ENV"] == "test"
    File.expand_path("../test/data", __FILE__)
  else
    File.expand_path("../data", __FILE__)
  end
end

def render_markdown(text)
  markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  markdown.render(text)
end

def read_file(path)
  file_extension = File.extname(path)
  text = File.read(path)
  case file_extension
  when ".txt"
    headers["Content-Type"] = "text/plain"    
    text
  when ".md"
    erb render_markdown(text)
  end
end

get "/" do
  pattern = File.join(data_path, "*")
  @files = []
  Dir.glob(pattern).each do |path|
    @files << File.basename(path)
  end

  erb :index
end

get "/new" do
  erb :new
end

post "/new" do
  new_filename = params[:filename].to_s
  file_extension = File.extname(new_filename)
  if new_filename.size == 0
    session[:message] = "A name is required."
    status 422
    erb :new
  elsif file_extension != ".txt" and file_extension != ".md"
    session[:message] = "Only .txt and .md files are supported."
    status 422
    erb :new
  else
    FileUtils.touch(File.join(data_path,new_filename))
    session[:message] = "#{new_filename} has been created."
    redirect "/"    
  end
end

get "/:filename" do
  filename = params[:filename]
  path = File.join(data_path, filename)
  if File.exist?(path)
    read_file(path)
  else
    session[:message] = "#{filename} does not exist"
    redirect "/"
  end
end

get "/:filename/edit" do
  @filename = params[:filename]
  path = File.join(data_path, @filename)
  @content = File.read(path)

  erb :edit
end

post "/:filename/edit" do
  filename = params[:filename]
  content = params[:content]
  path = File.join(data_path, filename)
  File.open(path, mode="w") do |file|
    file.write(content)
  end
  session[:message] = "#{filename} has been updated"
  redirect "/"
end

post "/:filename/delete" do
  filename = params[:filename]
  path = File.join(data_path, filename)
  File.delete(path)
  session[:message] = "#{filename} has been deleted."
  redirect "/"
end

get "/users/signin" do
  erb :signin
end

post "/users/signin" do
  @username = params[:username]
  password = params[:password]
  if @username == "admin" and password == "secret"
    session[:message] = "Welcome!"
    session[:username] = @username
    redirect "/"
  else
    session[:message] = "Invalid Credentials"
    status 422
    erb :signin
  end
end

post "/users/signout" do
  session.delete(:username)
  session[:message] = "You have been signed out."  
  redirect "/"
end


