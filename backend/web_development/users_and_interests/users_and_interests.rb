require "tilt/erubis"
require "sinatra"
require "sinatra/reloader"
require "yaml"
require "pry"

before do
  @users = YAML.load_file("data/user.yaml")
end

helpers do
  def count_interests
    interest_count = 0
    @users.each do |user, info|
      interest_count += info[:interests].size
    end
    interest_count
  end
end

get "/" do
  redirect "/users"
end

get "/users" do
  erb :users
end

get "/:user" do
  current_user = params[:user].to_sym
  @info = @users[current_user]
  @other_users = @users.reject { |user, _| user == current_user }
  erb :user
end