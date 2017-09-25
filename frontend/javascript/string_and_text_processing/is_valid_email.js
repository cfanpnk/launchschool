// Requirements:
// 1. There must be one @ sign.
// 2. The local part must contain one or more letters (A-Z, a-z) and/or digits (0-9). It may not contain any other characters.
// 3. The domain part must contain two or more components with a single dot (.) between each component. Each component must contain one or more letters (A-Z, a-z).
function isValidEmail(email) {
  return !!email.match(/^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i)
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false