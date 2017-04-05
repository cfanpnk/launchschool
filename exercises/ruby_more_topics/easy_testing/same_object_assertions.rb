require 'minitest/autorun'

class MyFirstTest < Minitest::Test
  def test_kind
    assert_same(list, list.process)
  end
end