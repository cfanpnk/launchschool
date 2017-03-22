require 'simplecov'
SimpleCov.start
require 'minitest/autorun'
require "minitest/reporters"
Minitest::Reporters.use!


require_relative 'to_do_list'

class TodoListTest < MiniTest::Test
  def setup
    @todo1 = Todo.new("Buy milk")
    @todo2 = Todo.new("Clean room")
    @todo3 = Todo.new("Go to gym")
    @todos = [@todo1, @todo2, @todo3]

    @list = TodoList.new("Today's Todos")
    @list.add(@todo1)
    @list.add(@todo2)
    @list.add(@todo3)
  end

  def test_to_a
    assert_equal(@todos, @list.to_a)
  end

  def test_size
    assert_equal(3, @list.size)
  end

  def test_first
    assert_equal(@todo1, @list.first)
  end

  def test_last
    assert_equal(@todo3, @list.last)
  end

  def test_shift
    assert_equal(@todo1, @list.shift)
    assert_equal([@todo2, @todo3], @list.to_a)
  end

  def test_pop
    assert_equal(@todo3, @list.pop)
    assert_equal([@todo1, @todo2], @list.to_a)
  end

  def test_done?
    @list.mark_all_done
    assert_equal(true, @list.done?)
  end

  def test_mark_all_undone
    @list.mark_all_undone
    assert_equal(false, @todo1.done?)
    assert_equal(false, @todo2.done?)
    assert_equal(false, @todo3.done?)
  end

  def test_raise_add_non_todo
    assert_raises(TypeError) do
      @list.add("This is not a todo")
    end
    assert_raises(TypeError) do
      @list.add(100)
    end
  end

  def test_shovel
    todo = Todo.new("Read a book")
    @list << todo
    @todos << todo
    assert_equal(@todos, @list.to_a)
  end

  def test_item_at
    assert_equal(@todo1, @list.item_at(0))
    assert_raises(IndexError) do
      @list.item_at(4)
    end
  end

  def test_mark_done_at
    @list.mark_done_at(0)
    assert_equal(true, @todo1.done?)
    assert_equal(false, @todo2.done?)
    assert_equal(false, @todo2.done?)
    assert_raises(IndexError) do
      @list.mark_done_at(100)
    end
  end

  def test_mark_undone_at
    @todo1.done!
    @todo2.done!
    @todo3.done!
    @list.mark_undone_at(1)
    assert_equal(false, @todo2.done?)
    assert_equal(true, @todo1.done?)
    assert_equal(true, @todo3.done?)
    assert_raises(IndexError) do
      @list.mark_undone_at(100)
    end
  end

  def test_done!
    @list.done!
    assert_equal(true, @todo1.done?)
    assert_equal(true, @todo2.done?)
    assert_equal(true, @todo3.done?)
    assert_equal(true, @list.done?)
  end

  def test_remove_at
    @list.remove_at(0)
    assert_equal([@todo2, @todo3], @list.to_a)
    assert_raises(IndexError) do
      @list.remove_at(100)
    end
  end

  def test_to_s
    output = <<-OUTPUT.chomp.gsub /^\s+/, ""
    ---- Today's Todos ----
    [ ] Buy milk
    [ ] Clean room
    [ ] Go to gym
    OUTPUT

    assert_equal(output, @list.to_s)

    @todo1.done!
    output = <<-OUTPUT.chomp.gsub /^\s+/, ""
    ---- Today's Todos ----
    [X] Buy milk
    [ ] Clean room
    [ ] Go to gym
    OUTPUT
    assert_equal(output, @list.to_s)

    @list.done!
    output = <<-OUTPUT.chomp.gsub /^\s+/, ""
    ---- Today's Todos ----
    [X] Buy milk
    [X] Clean room
    [X] Go to gym
    OUTPUT
    assert_equal(output, @list.to_s)
  end

  def test_each 
    count = 0
    @list.each do |todo|
      count += 1
    end
    assert_equal(count, @list.size)
    assert_same(@list, @list.each { |todo| nil })
  end

  def test_select
    assert_equal(@list.size, @list.select { |todo| todo.title.size > 2 }.size)
  end

  def test_find_by_title
    assert_equal(@todo1, @list.find_by_title("Buy milk"))
  end

  def test_all_done
    @todo1.done!
    @todo2.done!
    @todo3.done!
    assert_equal(3, @list.all_done.size)
  end

  def test_all_not_done
    assert_equal(3, @list.all_not_done.size)
  end

  def test_mark_done
    @list.mark_done("Clean room")
    assert_equal(@todo2.done?, true)
  end
end