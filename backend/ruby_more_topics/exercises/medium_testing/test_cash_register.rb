require 'minitest/autorun'
require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < MiniTest::Test
  def setup
    @transaction = Transaction.new(8)
    @transaction.amount_paid = 10
    @register = CashRegister.new(100)
  end

  def test_accept_money
    assert_equal(110, @register.accept_money(@transaction))
  end

  def test_change
    assert_equal(2, @register.change(@transaction))
  end

  def test_give_receipt
    assert_output("You've paid $8.\n") do
      @register.give_receipt(@transaction)
    end
  end

  def test_prompt_for_payment
    input = StringIO.new('10\n')
    output = StringIO.new
    @transaction.prompt_for_payment(input: input, output: output)
    assert_equal(10, @transaction.amount_paid)
  end
end