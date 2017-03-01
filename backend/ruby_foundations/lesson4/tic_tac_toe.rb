require 'pry'

INITIAL_MARKER = ' '.freeze
PLAYER_MARKER = 'X'.freeze
COMPUTER_MARKER = 'O'.freeze
WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] +  # row
                [[1, 4, 7], [2, 5, 8], [3, 6, 9]] +  # cols
                [[1, 5, 9], [3, 5, 7]].freeze        # diagnols

def prompt(msg)
  puts "=> #{msg}"
end

def display_board(board)
  system 'clear'
  puts "You're a #{PLAYER_MARKER}. Computer is #{COMPUTER_MARKER}"
  puts ""
  puts "     |     |"
  puts "  #{board[1]}  |  #{board[2]}  |  #{board[3]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{board[4]}  |  #{board[5]}  |  #{board[6]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{board[7]}  |  #{board[8]}  |  #{board[9]}"
  puts "     |     |"
  puts ""
end

def empty_squares(board)
  board.keys.select { |num| board[num] == INITIAL_MARKER }
end

def initilize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = INITIAL_MARKER }
  new_board
end

def joinor(array, symbol, word)
  if (array.size > 1)
    array.join(symbol).insert(-2, word + ' ') 
  else
    array[0]
  end

end

def player_places_piece!(board)
  square = ''
  loop do
    prompt "Choose a square (#{joinor(empty_squares(board), ', ', 'or')}):"
    square = gets.chomp.to_i
    break if empty_squares(board).include?(square)
    prompt "Sorry, that's not a valid choice."
  end

  board[square] = PLAYER_MARKER
end

def computer_places_piece!(board)
  WINNING_LINES.each do |line|
    # pick the winning move
    if board.values_at(*line).count(COMPUTER_MARKER) == 2
      empty_spot = board.select { |key, value| line.include?(key) && value == INITIAL_MARKER }.keys.first
      board[empty_spot] = COMPUTER_MARKER
      break 
    # pick the defending move
    elsif board.values_at(*line).count(PLAYER_MARKER) == 2
      empty_spot = board.select { |key, value| line.include?(key) && value == INITIAL_MARKER }.keys.first
      board[empty_spot] = COMPUTER_MARKER
      break
    end
  end
  if board[5] == INITIAL_MARKER
     board[5] = COMPUTER_MARKER
  else
     square = empty_squares(board).sample
     board[square] = COMPUTER_MARKER
  end
end

def board_full?(board)
  empty_squares(board).empty?
end

def someone_won?(board)
  !!detect_winner(board)
end

def detect_winner(board)
  WINNING_LINES.each do |line|
    if board.values_at(*line).count(PLAYER_MARKER) == 3
      return 'Player'
    elsif board.values_at(*line).count(COMPUTER_MARKER) == 3
      return 'Computer'
    end
  end
  nil
end

loop do
  board = initilize_board
  display_board(board)

  loop do
    display_board(board)
    player_places_piece!(board)
    break if someone_won?(board) || board_full?(board)
    computer_places_piece!(board)
    break if someone_won?(board) || board_full?(board)
  end

  display_board(board)

  if someone_won?(board)
    prompt "#{detect_winner(board)} won!"
  else
    prompt "It's a tie!"
  end

  prompt "Play again? (y or n)"
  answer = gets.chomp
  break if answer.casecmp('n') == 0
end

prompt "Thanks for playing. Goodbye!"
