var arr = ['Apples', 'Peaches', 'Grapes'];

arr[3.4] = 'Oranges'; 
console.log(arr); // ['Apples', 'Peaches', 'Grapes', '3.4': 'Oranges']
console.log(arr.length); // 3
console.log(Object.keys(arr).length); // 4

arr[-2] = 'Watermelon'; 
console.log(arr); // ['Apples', 'Peaches', 'Grapes', '3.4': 'Oranges', '-2': 'Watermelon']
console.log(arr.length); // 3
console.log(Object.keys(arr).length); // 5