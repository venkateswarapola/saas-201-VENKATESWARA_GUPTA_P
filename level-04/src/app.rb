#app.rb
require 'sinatra'

def get_todos
  @@todos ||= []
end

def add_todo(todo)
  get_todos().push(todo)
end

def delete_todo
  get_todos().slice!(@id - 1)
end

def get_todo
  get_todos()[@id - 1]
end

def update_todo(title)
  get_todos()[@id - 1] = {title => get_todos()[@id - 1].values[0]}
end

get "/todos" do
  @todos = get_todos()
  erb :todos
end

post "/todos" do
	todo = {params[:title] => params[:date]}
  add_todo(todo)
  redirect "/todos"
end

get "/todos/:id" do
  @id = params[:id].to_i
  @todo = get_todo()
  erb :todo
end

put "/todos/:id" do
  @id = params[:id].to_i
  update_todo(params[:title])
  redirect "/todos"
end

delete "/todos/:id" do
  @id = params[:id].to_i
  delete_todo()
  redirect "/todos"
end