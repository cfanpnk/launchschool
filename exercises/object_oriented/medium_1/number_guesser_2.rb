class Guesser
  def initialize(beginning, ending)
    @beginning = beginning
    @ending = ending
    @win = (beginning..ending).to_a.sample
    @limit = Math.log2((beginning..ending).size).to_i + 1
    @user_input = 0
  end

  def play
    loop do
      loop do 
        display_guesses
        puts "Enter a number between #{@beginning} and #{@ending}:"
        @user_input = gets.chomp.to_i
        @limit -= 1
        break if valid_user_input?
        puts "Invalid guess. "
      end
      break if win? or @limit == 0
    end
    puts "You are out of guesses. You lose." if @limit == 0
  end

  def display_guesses
    puts "You have #{@limit} guesses remaining."
  end

  def valid_user_input?
    (@beginning..@ending).include?(@user_input)
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

game = Guesser.new(501, 1500)
game.play