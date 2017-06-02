require "pg"

class ExpenseData
  def initialize
    @connection = PG.connect(dbname: "expense")
    setup_schema
  end

  def setup_schema
    result = @connection.exec <<~SQL
      SELECT COUNT(*) FROM information_schema.tables
      WHERE table_schema = 'public' AND table_name = 'expenses';
    SQL

    if result[0]["count"] == "0"
      @connection.exec <<~SQL
        CREATE TABLE expenses (
          id serial PRIMARY KEY,
          amount numeric(6,2) NOT NULL CHECK (amount >= 0.01),
          memo text NOT NULL,
          created_on date NOT NULL
        );
      SQL
    end
  end

  def display_expenses(expenses)
    expenses.each do |expense|
      row = [expense["id"].rjust(4), expense["created_on"], expense["amount"].rjust(12), expense["memo"]]
      puts row.join(" | ")
    end

    total_amount = 0
    expenses.each do |expense|
      total_amount += expense["amount"].to_f
    end
    puts "-" * 50
    puts "Total" + total_amount.to_s.rjust(27)
  end

  def display_count(expenses)
    count = expenses.ntuples
    if count == 0
      puts "There are no expenses."
    else
      puts "There are #{count} expense#{"s" if count != 1}."
    end
  end

  def list_expenses
    result = @connection.exec("SELECT * FROM expenses;")
    display_count(result)
    display_expenses(result)
  end

  def add_expenses(amount, memo)
    date = Date.today
    sql = "INSERT INTO expenses(amount, memo, created_on) VALUES($1, $2, $3);"
    @connection.exec_params(sql, [amount, "#{memo}", "#{date}"])
  end

  def search_expenses(search_term)
    sql = "SELECT * FROM expenses WHERE memo ILIKE $1;"
    result = @connection.exec_params(sql, ["%#{search_term}%"])
    display_count(result)
    display_expenses(result) if result.ntuples > 0
  end

  def delete_expenses(id)
    search_sql = "SELECT * FROM expenses WHERE id = $1;"
    delete_sql = "DELETE FROM expenses WHERE id = $1;"
    result = @connection.exec_params(search_sql, [id])
    if result.ntuples > 0
      @connection.exec_params(delete_sql, [id])
      puts "The following expense has been deleted:"
      display_expenses(result)
    else
      puts "There is no expense with the id '#{id}'."
    end
  end

  def clear_expenses
    sql = "DELETE * FROM expenses;"
    @connect.exec(sql)
  end
end
