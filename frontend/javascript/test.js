function foo(list) {
  return list.map(function(word) {
    return word.match(/[aeiou]/ig) || [];
  }).reduce(function(acc, letterList) {
    return acc + letterList.length;
  }, 0);
}

console.log(foo(['cart', 'truck', 'cart', 'train']));
console.log(foo(['apple', 'banana', 'orange']));
console.log(foo(['a', 'b', 'c']));
console.log(foo(['a', 'e', 'i', 'o', 'u']));