require "socket"

def get_params(request)
  path_with_params = request.split[1]
  path, params = path_with_params.split('?')

  params = (params || "").split('&')
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

  client.puts "<h1>Counter</h1>"

  number = parameters["number"].to_i
  client.puts "<p>The current number is #{number}.</p>"

  client.puts "<a href='?number=#{number + 1}'>Add one</a>"
  client.puts "<a href='?number=#{number - 1}'>Substract one</a>"
  client.puts "</body>"
  client.puts "</html>"
  client.close
end