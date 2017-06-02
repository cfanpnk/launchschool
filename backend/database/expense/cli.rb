require 'io/console'

class CLI
  def initialize
    @app = ExpenseData.new
  end

  def display_help
    puts <<~HELP
      An expense recording system

      Commands:

      add AMOUNT MEMO [DATE] - record a new expense
      clear - delete all expenses
      list - list all expenses
      delete NUMBER - remove expense with id NUMBER
      search QUERY - list expenses with a matching memo field
    HELP
  end

  def run(args)
    command = args[0]
    case command
    when "list"
      @app.list_expenses
    when "add"
      amount, memo = args[1], args[2]
      if amount == nil || memo == nil
        abort "You must provide an amount and memo."
      else 
        @app.add_expenses(amount, memo)
      end
    when "search"
      search_term = args[1]
      @app.search_expenses(search_term)
    when "delete"
      id = args[1]
      @app.delete_expenses(id)
    when "clear"
      input = ""
      loop do 
        puts "This will remove all expenses. Are you sure? (y/n)"
        input = $stdin.getch.upcase
        break if input == 'Y' || input == 'N'
        puts "Invalid key pressed!"        
      end
      if input == 'Y'
        @app.clear_expenses 
      else
        abort
      end
    else
      display_help
    end
  end

end