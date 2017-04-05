class PingGame
  attr_accessor :limit, :win, :user_input
  def initialize
    @limit = 7
    @win = (1..100).to_a.sample
    @user_input = 0
  end

  def play
    loop do
      loop do 
        display_guesses
        puts "Enter a number between 1 and 100:"
        @user_input = gets.chomp.to_i
        @limit -= 1
        break if valid_user_input?
        puts "Invalid guess. "
      end
      break if win? or limit == 0
    end
    puts "You are out of guesses. You lose." if limit == 0
  end

  def display_guesses
    puts "You have #{limit} guesses remaining."
  end

  def valid_user_input?
    (1..100).include?(user_input)
  end

  def win?
    if @user_input > @win
      puts "Your guess is too high"
      return false
    elsif @user_input < @win
      puts "Your guess is too low"
      return false
    else
      puts "You win!"
      return true
    end
  end
end

game = PingGame.new
game.play