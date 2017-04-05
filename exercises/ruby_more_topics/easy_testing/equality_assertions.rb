require 'minitest/autorun'

class MyFirstTest < Minitest::Test
  def test_equality
    value = 'XyZ'
    assert_equal('xyz', value.downcase)
  end
end