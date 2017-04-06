class Card
  include Comparable
  attr_reader :rank, :suit, :real_rank
  MAPPING = {"Jack" => 11, "Quene" => 12, "King" => 13, "Ace" => 14}

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

deck = Deck.new
drawn = []
52.times { drawn << deck.draw }
puts drawn.count { |card| card.rank == 5 } == 4
puts drawn.count { |card| card.suit == 'Hearts' } == 13


drawn2 = []
52.times { drawn2 << deck.draw }
puts drawn != drawn2 # Almost always.