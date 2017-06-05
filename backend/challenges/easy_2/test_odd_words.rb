require 'minitest/autorun'

require_relative "odd_words"

class OddWordsTest < MiniTest::Test
  def test_separated_by_one_space
    assert_equal("whats eht matter htiw kansas.", 
                 OddWords.new("whats the matter with kansas.").convert
                )
  end

  def test_one_word
    assert_equal("hello.", OddWords.new("hello.").convert)
  end

  def test_separated_by_two_spaces
    assert_equal("whats eht matter htiw kansas.", 
                 OddWords.new("whats  the  matter  with  kansas.").convert
                )
  end

  def test_last_word_is_a_even_word
    assert_equal("what si the rettam with sasnak.", 
                 OddWords.new("what is the matter with kansas.").convert
                )
  end

  def test_terminated_by_one_space_with_a_point
    assert_equal("hello.", OddWords.new(" hello . ").convert)
  end

  def test_terminated_by_many_spaces_with_a_point
    assert_equal("hello.", OddWords.new("hello    .").convert)
  end

  def test_empty_string
    assert_equal("", OddWords.new("").convert)
  end

  def test_single_period
    assert_equal(".", OddWords.new(".").convert)
  end
end

