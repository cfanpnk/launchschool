def get_uuid
  pool = %w(1 2 3 4 5 6 7 8 9 a b c d e f)
  uuid = []
  uuid.push(pool.sample(8).join)
  uuid.push(pool.sample(4).join)
  uuid.push(pool.sample(4).join)
  uuid.push(pool.sample(4).join)
  uuid.push(pool.sample(12).join)
  uuid.join('-')
end

puts get_uuid

puts rand(16).to_s(16) 