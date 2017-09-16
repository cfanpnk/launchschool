function fields(str) {
   return str.split(/[\s,]+/)
}

console.log(fields("Pete,201,Student"));
console.log(fields("Pete \t 201    ,  TA"));
console.log(fields("Pete \t 201"));