require 'minitest/autorun'

class MyFirstTest < Minitest::Test
  def test_include
    list = ['xyz', 'abc']
    assert_equal(true, list.include?('xyz'))
  end
end