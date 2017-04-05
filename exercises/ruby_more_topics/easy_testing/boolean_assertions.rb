require 'minitest/autorun'

class MyFirstTest < Minitest::Test
  def test_odd_value
    value = 3
    assert_equal(true, value.odd?)
  end
end