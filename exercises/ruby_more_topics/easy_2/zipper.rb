def zip(array1, array2)
  outter = []
  index = 0
  1.upto(array1.size) {
    innner = []
    inner << array1[index]
    inner << array2[index]
    outter << inner
  }
end

p [1, 2, 3].zip([4, 5, 6]) == [[1, 4], [2, 5], [3, 6]]