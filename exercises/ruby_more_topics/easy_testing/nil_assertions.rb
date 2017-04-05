require 'minitest/autorun'

class MyFirstTest < Minitest::Test
  def test_nil
    value = nil
    assert_nil(value)
  end
end