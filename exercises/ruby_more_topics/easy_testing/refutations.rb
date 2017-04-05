require 'minitest/autorun'

class MyFirstTest < Minitest::Test
  def test_kind
    refute_includes(list, 'xyz')
  end
end