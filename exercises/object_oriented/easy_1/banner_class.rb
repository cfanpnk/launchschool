class Banner

  def initialize(message, width = 0)
    @message = message
    @width = width
  end

  def to_s
    [horizontal_rule, empty_line, message_line, empty_line, horizontal_rule].join("\n")
  end

  private

  def horizontal_rule
    "+-" + "-" * @message.center(@width).size + "-+"
  end

  def empty_line
    "| " + " " * @message.center(@width).size + " |"
  end

  def message_line
    "| " + @message.center(@width) + " |"
  end
end

banner = Banner.new('To boldly go where no one has gone before.', 80)
puts banner

banner = Banner.new('')
puts banner