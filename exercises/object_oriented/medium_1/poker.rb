class Card
  include Comparable
  attr_reader :rank, :suit, :real_rank
  MAPPING = {"Jack" => 11, "Queen" => 12, "King" => 13, "Ace" => 14}

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
    if (2..10).to_a.include?(@rank)
      @real_rank = rank
    else
      @real_rank = MAPPING[rank]
    end
  end

  def <=>(other)
    real_rank <=> other.real_rank
  end

  def to_s
    "#{rank} of #{suit}"
  end
end

class Deck
  attr_reader :cards
  RANKS = (2..10).to_a + %w(Jack Queen King Ace).freeze
  SUITS = %w(Hearts Clubs Diamonds Spades).freeze
  def initialize
    reset
  end

  def reset
    @cards = []
    RANKS.each do |rank|
      SUITS.each do |suit|
        card = Card.new(rank, suit)
        @cards << card
      end
    end
    @cards.shuffle!
  end

  def draw
    reset if @cards.empty?
    @cards.pop
  end
end

class PokerHand
  attr_accessor :cards
  def initialize(deck)
    @deck = deck
    @cards = []
    @rank_count = Hash.new(0)
    5.times { 
      card = deck.draw 
      @rank_count[card.rank] += 1
      @cards << card
    }
  end

  def print
    @cards.each do |card|
      puts card
    end
  end

  def evaluate
    case
    when royal_flush?     then 'Royal flush'
    when straight_flush?  then 'Straight flush'
    when four_of_a_kind?  then 'Four of a kind'
    when full_house?      then 'Full house'
    when flush?           then 'Flush'
    when straight?        then 'Straight'
    when three_of_a_kind? then 'Three of a kind'
    when two_pair?        then 'Two pair'
    when pair?            then 'Pair'
    else                       'High card'
    end
  end

  private

  def royal_flush?
    straight_flush? && @cards.each { |card| return false if (10..14).include?(card.real_rank) == false }
  end

  def straight_flush?
    straight? && flush?
  end

  def four_of_a_kind?
    @rank_count.value?(4)
  end

  def full_house?
    three_of_a_kind? && pair?
  end

  def flush?
    @cards.all? { |card| card.suit == @cards.first.suit }
  end

  def straight?
    return false if @rank_count.any? { |_, value| value > 1 }
    @cards.max.real_rank - @cards.min.real_rank == 4
  end

  def three_of_a_kind?
    @rank_count.value?(3)
  end

  def two_pair?
    @rank_count.select { |key, value| value == 2 }.size == 2
  end

  def pair?
    @rank_count.value?(2)
  end
end

hand = PokerHand.new(Deck.new)
hand.print

class Array
  alias_method :draw, :pop
end

# Test that we can identify each PokerHand type.
hand = PokerHand.new([
  Card.new(10,      'Hearts'),
  Card.new('Ace',   'Hearts'),
  Card.new('Queen', 'Hearts'),
  Card.new('King',  'Hearts'),
  Card.new('Jack',  'Hearts')
])
puts hand.evaluate == 'Royal flush'

hand = PokerHand.new([
  Card.new(8,       'Clubs'),
  Card.new(9,       'Clubs'),
  Card.new('Queen', 'Clubs'),
  Card.new(10,      'Clubs'),
  Card.new('Jack',  'Clubs')
])
puts hand.evaluate == 'Straight flush'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Four of a kind'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(5, 'Hearts')
])
puts hand.evaluate == 'Full house'

hand = PokerHand.new([
  Card.new(10, 'Hearts'),
  Card.new('Ace', 'Hearts'),
  Card.new(2, 'Hearts'),
  Card.new('King', 'Hearts'),
  Card.new(3, 'Hearts')
])
puts hand.evaluate == 'Flush'

hand = PokerHand.new([
  Card.new(8,      'Clubs'),
  Card.new(9,      'Diamonds'),
  Card.new(10,     'Clubs'),
  Card.new(7,      'Hearts'),
  Card.new('Jack', 'Clubs')
])
puts hand.evaluate == 'Straight'

hand = PokerHand.new([
  Card.new(3, 'Hearts'),
  Card.new(3, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(3, 'Spades'),
  Card.new(6, 'Diamonds')
])
puts hand.evaluate == 'Three of a kind'

hand = PokerHand.new([
  Card.new(9, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(8, 'Spades'),
  Card.new(5, 'Hearts')
])
puts hand.evaluate == 'Two pair'

hand = PokerHand.new([
  Card.new(2, 'Hearts'),
  Card.new(9, 'Clubs'),
  Card.new(5, 'Diamonds'),
  Card.new(9, 'Spades'),
  Card.new(3, 'Diamonds')
])
puts hand.evaluate == 'Pair'

hand = PokerHand.new([
  Card.new(2,      'Hearts'),
  Card.new('King', 'Clubs'),
  Card.new(5,      'Diamonds'),
  Card.new(9,      'Spades'),
  Card.new(3,      'Diamonds')
])
puts hand.evaluate == 'High card'
