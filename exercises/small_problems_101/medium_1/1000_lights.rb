# Initially all lights are turned on
# round 1: toggle the light 1, 2, 3
# round 2: toggle the light 2, 4, 6
# round 3: toggle the light 3, 6, 9
# round 4: toggle the light 4, 8, 12

def toggle_lights(num)
  lights = {}
  counter = 1
  num.times {
    lights[counter] = false
    counter += 1
  }

  round = 0
  num.times {
    round += 1
    lights.each_pair do |key, value|
      lights[key] = !lights[key] if key % round == 0
    end
  }
  lights.keys.select { |key| lights[key] == true}
end

p toggle_lights(5)
p toggle_lights(10)
p toggle_lights(1000)