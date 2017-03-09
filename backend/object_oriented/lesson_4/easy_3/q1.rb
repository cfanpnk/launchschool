class Greeting
  def greet(message)
    puts message
  end
end

class Hello < Greeting
  def hi
    greet("Hello")
  end
end

class Goodbye < Greeting
  def bye
    greet("Goodbye")
  end
end


# case 1: Hello
hello = Hello.new
hello.hi

# case 2: undefined method error
hello = Hello.new
hello.bye

# case 3: ArgumentError
hello = Hello.new
hello.greet

# case 4: Goodbye
hello = Hello.new
hello.greet("Goodbye")

# case 5: undefined method error
Hello.hi