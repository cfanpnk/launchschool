arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr1 = arr.push(11)
arr2 = arr.unshift(0)

p arr1
p arr2

arr2.delete(11)
arr2.push(3)

p arr2

arr3 = arr2.uniq

p arr3