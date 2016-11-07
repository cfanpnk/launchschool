DECK = [2, 3, 4 , 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace']

def prompt(msg)
  puts "=>#{msg}"
end

def deal_cards
  DECK.sample(2)
end

def determine_value(cards)
  value = 0
  cards.each do |card|
    if (2..10).to_a.include?(card)
      value = value + card
    elsif ['jack', 'queen', 'king'].include?(card)
      value = value + 10
    elsif card == 'ace'
      (value + 10) > 21 ? (value = value + 1) : (value = value + 10)
    end
  end
  value
end

def busted?(cards)
  determine_value(cards) > 21 ? true : false
end

def determine_results(player_cards, dealer_cards)
  if determine_value(player_cards) > determine_value(dealer_cards) 
    "Player won!" 
  elsif determine_value(player_cards) < determine_value(dealer_cards) 
    "Dealer won!"
  else 
    "It's a tie!"
  end
end

def display_results(name, cards, value)
  puts "#{name} has cards #{cards} with value of #{value}"
end

puts "Dealing cards to player and dealer"
player_cards = deal_cards
dealer_cards = deal_cards

player_value = determine_value(player_cards)
dealer_value = determine_value(dealer_cards)

puts "Dealer has #{dealer_cards.sample} and unknown card"
puts "You have #{player_cards}"

puts "------ Player's turn ------"
answer = nil
until busted?(player_cards) do
  prompt "hit or stay?"
  answer = gets.chomp
  break if answer.casecmp('stay') == 0
  player_cards.push(DECK.sample)
  player_value = determine_value(player_cards)
  puts "Your cards are #{player_cards} with value of #{player_value}"
end

if busted?(player_cards)
  puts "You are busted! Game over!"
else
  puts "You chose to stay!"
end

display_results('Player', player_cards, player_value)

puts "------ Dealer's turn ------"
until busted?(dealer_cards) || dealer_value >= 17 do
  break if busted?(player_cards)
  dealer_cards.push(DECK.sample)
  dealer_value = determine_value(dealer_cards)
end
display_results('Dealer', dealer_cards, dealer_value)
if busted?(dealer_cards)
  puts "Dealer is busted! You won"
end

puts "----- Game Results -----"
puts determine_results(player_cards, dealer_cards)

