require 'minitest/autorun'

class MyFirstTest < Minitest::Test
  def test_empty_object
    list = []
    assert_equal(true, list.empty?)
  end
end