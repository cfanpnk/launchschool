sentence = "Humpty Dumpty sat on a wall."

puts sentence.split(/\W/).reverse.join(' ') + '.'