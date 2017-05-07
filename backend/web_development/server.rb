require "socket"

def get_params(request)
  path_with_params = request.split[1]
  params = path_with_params.split('?')[1].split('&')
  result = {}
  params.each do |param|
    key, value = param.split('=')
    result[key] = value
  end
  result
end

def roll_dice(sides)
  rand(sides) + 1
end

server = TCPServer.new("localhost", 3003)
loop do
  client = server.accept

  request_line = client.gets
  puts request_line
  next if !request_line || request_line =~ /favicon/

  parameters = get_params(request_line)

  rolls = parameters["rolls"].to_i
  sides = parameters["sides"].to_i

  client.puts "HTTP/1.1 200/OK"
  client.puts "Content-Type: text/html"
  client.puts 
  client.puts request_line
  client.puts "<html>"
  client.puts "<body>"
  client.puts "<h1>Rolls!</h1>"

  rolls.times { 
    client.puts "<p>", roll_dice(sides), "</p>"
  }
  client.puts "</body>"
  client.puts "</html>"
  client.close
end