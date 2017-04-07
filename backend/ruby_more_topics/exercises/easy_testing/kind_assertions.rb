require 'minitest/autorun'

class MyFirstTest < Minitest::Test
  def test_kind
    assert_kind_of(Numeric, value)
  end
end