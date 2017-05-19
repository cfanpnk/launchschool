require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/content_for"
require "tilt/erubis"

configure do
  enable :sessions
  set :session_secret, 'secret'
  set :erb, :escape_html => true
end

before do
  session[:lists] ||= []
end

helpers do
  def list_complete?(list)
    todos_count(list) > 0 && todos_remaining_count(list) == 0
  end

  def list_class(list)
    "complete" if list_complete?(list)
  end

  def todos_count(list)
    list[:todos].size
  end

  def todos_remaining_count(list)
    list[:todos].select { |todo| todo[:completed] == false }.size 
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
  list = session[:lists].find { |list| list[:id] == list_id } if list_id
  if list == nil then
    session[:error] = "The specified list was not found."
    redirect "/lists"
  else
    return list
  end
end

def next_item_id(items)
  max = items.map { |item| item[:id] }.max || 0
  max + 1
end

get "/" do
  redirect "/lists"
end

# View all of the lists
get "/lists" do
  @lists = session[:lists]
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
  elsif session[:lists].any? { |list| list[:name] == name }
    "List name must be unique."
  end
end

def error_for_todo_name(name, list)
  if !(1..100).cover? name.size
    "Todo name must be between 1 and 100 characters."
  elsif list[:todos].any? { |todo| todo[:name] == name }
    "Todo name must be unique."
  end
end

# Create a new list
post "/lists" do
  list_name = params[:list_name].strip
  error = error_for_list_name(list_name)
  lists = session[:lists]
  id = next_item_id(lists)
  if error
    session[:error] = error
    erb :new_list
  else
    session[:lists] << { id: id, name: list_name, todos: [] }
    session[:success] = "The list has been created."
    redirect "/lists"
  end
end

get "/lists/:list_id" do 
  @list_id = params[:list_id].to_i
  @list = load_list(@list_id)
  erb :list
end

get "/lists/:list_id/edit" do
  @list_id = params[:list_id].to_i
  @list = load_list(@list_id)
  erb :edit_list
end

post "/lists/:list_id" do
  @list_id = params[:list_id].to_i
  @list = load_list(@list_id)
  list_name = params[:list_name].strip
  error = error_for_list_name(list_name)
  if error
    session[:error] = error
    erb :edit_list
  else
    @list[:name] = list_name
    session[:success] = "The list name has been updated."
    redirect "/lists/#{@list_id}"
  end
end

# Delete a todo list
post "/lists/:list_id/delete" do 
  list_id = params[:list_id].to_i
  lists = session[:lists]
  lists.reject! { |list| list[:id] == list_id }

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
    id = next_item_id(@list[:todos])
    @list[:todos] << { id: id, name: todo_item, completed: false }
    session[:success] = "The todo item has been added."
    redirect "/lists/#{@list_id}"
  end
end

post "/lists/:list_id/todos/:todo_id/delete" do
  list_id = params[:list_id].to_i
  todo_id = params[:todo_id].to_i
  list = load_list(list_id)
  todos = list[:todos]
  todos.reject! { |todo| todo[:id] == todo_id }

  if env["HTTP_X_REQUESTED_WITH"] == "XMLHttpRequest"
    status 204
  else
    session[:success] = "The todo has been deleted."
    redirect "/lists/#{list_id}"
  end
end

post "/lists/:list_id/todos/:todo_id/toggle" do
  list_id = params[:list_id].to_i
  todo_id = params[:todo_id].to_i
  list = load_list(list_id)
  is_completed = params[:completed] == 'true'
  todo = list[:todos].find { |todo| todo[:id] == todo_id }
  todo[:completed] = is_completed
  session[:success] = "The todo has been updated."
  redirect "/lists/#{list_id}"
end

post "/lists/:list_id/complete" do
  list_id = params[:list_id].to_i
  list = load_list(list_id)
  list[:todos].each do |todo|
    todo[:completed] = true
  end
  session[:success] = "All todo items are marked as completed."
  redirect "/lists/#{list_id}"
end
