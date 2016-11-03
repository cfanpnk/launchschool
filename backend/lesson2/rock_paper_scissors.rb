
require 'yaml'
VALID_CHOICES = YAML.load_file('valid_choices.yml')

def win?(first, second)
   (first == 'scissors' && second == 'paper') ||
   (first == 'paper' && second == 'rock') ||
   (first == 'rock' && second == 'lizard') ||
   (first == 'lizard' && second == 'spock') ||
   (first == 'spock' && second == 'scissors') ||
   (first == 'scissors' && second == 'lizard') ||
   (first == 'lizard' && second == 'paper') ||
   (first == 'paper' && second == 'spock') ||
   (first == 'spock' && second == 'rock') ||
   (first == 'rock' && second == 'scissors')
end

def display_result(player, computer)
  if win?(player, computer)
    "You won"
  elsif win?(computer, player)
    "Computer won!"
  else
    "It's a tie"
  end
end

def prompt(message)
  puts("=> #{message}")
end

loop do
  choice = ''
  loop do
    prompt("Choose one: ")
    choice = gets.chomp

    if VALID_CHOICES[choice]
      break
    else
      prompt("That's not a valid choice.")\
    end
  end

  computer_choice = VALID_CHOICES.sample

  puts("You chose: #{choice}; Computer chose: #{computer_choice}")

  prompt(display_result(choice, computer_choice))

  prompt("Do you want to play again?")
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt("Thank you for playing. Good bye!")
