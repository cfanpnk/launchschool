require 'minitest/autorun'

class MyFirstTest < Minitest::Test
  def test_exception
    assert_raises(NoExperienceError) do
      employee.hire
    end
  end
end