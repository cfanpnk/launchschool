require 'minitest/autorun'

class MyFirstTest < Minitest::Test
  def test_type
    assert_instance_of(Numeric, value)
  end
end