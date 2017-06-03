require "sinatra"
require "sinatra/content_for"
require "tilt/erubis"

require_relative "database_persistence"

configure do
  enable :sessions
  set :session_secret, 'secret'
  set :erb, :escape_html => true

end

configure(:development) do
  require "sinatra/reloader"
  require "pry"
  also_reload "database_persistence.rb"
end

before do
  @storage = DatabasePersistence.new(logger)
end

helpers do
  def list_complete?(list)
    list[:todos_count] > 0 && list[:todos_remaining_count] == 0
  end

  def list_class(list)
    "complete" if list_complete?(list)
  end

  def sort_lists(lists, &block)
    complete_lists, incomplete_lists = lists.partition { |list| list_complete?(list) }
    incomplete_lists.each(&block)
    complete_lists.each(&block)
  end

  def sort_todos(todos, &block)
    complete_todos, incomplete_todos = todos.partition { |todo| todo[:completed] }

    incomplete_todos.each(&block)
    complete_todos.each(&block)
  end
end

def load_list(list_id)
  list = @storage.find_list(list_id)

  if list == nil then
    session[:error] = "The specified list was not found."
    redirect "/lists"
  else
    return list
  end
end

get "/" do
  redirect "/lists"
end

# View all of the lists
get "/lists" do
  @lists = @storage.all_lists
  erb :lists
end

# Render the new list form
get "/lists/new" do
  erb :new_list
end

# Return an error message if the name is invalue. Return nil if name is valid.
def error_for_list_name(name)
  if !(1..100).cover? name.size
    "List name must be between 1 and 100 characters."
  elsif @storage.all_lists.any? { |list| list[:name] == name }
    "List name must be unique."
  end
end

def error_for_todo_name(name, list)
  todos = @storage.find_todos_for_list(list)
  if !(1..100).cover? name.size
    "Todo name must be between 1 and 100 characters."
  elsif todos.any? { |todo| todo[:name] == name }
    "Todo name must be unique."
  end
end

# Create a new list
post "/lists" do
  list_name = params[:list_name].strip
  error = error_for_list_name(list_name)

  if error
    session[:error] = error
    erb :new_list
  else
    @storage.create_new_list(list_name)
    session[:success] = "The list has been created."
    redirect "/lists"
  end
end

get "/lists/:list_id" do 
  @list_id = params[:list_id].to_i
  @list = load_list(@list_id)
  @todos = @storage.find_todos_for_list(@list_id)
  erb :list
end

get "/lists/:list_id/edit" do
  @list_id = params[:list_id].to_i
  @list = load_list(@list_id)
  erb :edit_list
end

# Update an existing todo list
post "/lists/:list_id" do
  @list_id = params[:list_id].to_i
  @list = load_list(@list_id)
  list_name = params[:list_name].strip
  error = error_for_list_name(list_name)
  if error
    session[:error] = error
    erb :edit_list
  else
    @storage.update_list_name(@list_id, list_name)
    session[:success] = "The list name has been updated."
    redirect "/lists/#{@list_id}"
  end
end

# Delete a todo list
post "/lists/:list_id/delete" do 
  list_id = params[:list_id].to_i
  @storage.delete_list(list_id)

  if env["HTTP_X_REQUESTED_WITH"] == "XMLHttpRequest"
    "/lists"
  else
    redirect "/lists"
  end
end

# Add a new todo to a list
post "/lists/:list_id/todos" do
  @list_id = params[:list_id].to_i
  todo_item = params[:todo].strip
  @list = load_list(@list_id)

  error = error_for_todo_name(todo_item, @list)
  if error
    session[:error] = error
    erb :list
  else
    @storage.create_new_todo(@list_id, todo_item)
    session[:success] = "The todo item has been added."
    redirect "/lists/#{@list_id}"
  end
end

# Delete a todo from a list
post "/lists/:list_id/todos/:todo_id/delete" do
  list_id = params[:list_id].to_i
  todo_id = params[:todo_id].to_i
  list = load_list(list_id)

  @storage.delete_todo_from_list(list_id, todo_id)

  if env["HTTP_X_REQUESTED_WITH"] == "XMLHttpRequest"
    status 204
  else
    session[:success] = "The todo has been deleted."
    redirect "/lists/#{list_id}"
  end
end

# Update the status of a todo
post "/lists/:list_id/todos/:todo_id/toggle" do
  list_id = params[:list_id].to_i
  todo_id = params[:todo_id].to_i
  list = load_list(list_id)
  is_completed = params[:completed] == 'true'

  @storage.update_todo_status(list_id, todo_id, is_completed)
  session[:success] = "The todo has been updated."
  redirect "/lists/#{list_id}"
end

# Mark all todos as complete for a list
post "/lists/:list_id/complete" do
  list_id = params[:list_id].to_i
  @storage.mark_all_todos_as_completed(list_id)
  session[:success] = "All todo items are marked as completed."
  redirect "/lists/#{list_id}"
end
