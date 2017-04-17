require 'pry'

class Sieve
  attr_reader :numbers, :prime_numbers

  def initialize(limit)
    @numbers = (2..limit).to_a
    @prime_numbers = []
  end

  def primes
    loop do
      break if numbers.empty?
      next_prime = numbers.shift
      prime_numbers << next_prime
      numbers.reject! { |number| number % next_prime == 0 }
    end
    prime_numbers
  end
end
