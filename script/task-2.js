/*8 kyu №2
Convert a Boolean to a String

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

*/

function booleanToString(b) {
  return b ? 'true' : 'false';
}

console.log(booleanToString(true)); //'true'
console.log(booleanToString(false)); //"false"
console.log(booleanToString(-42)); //'true'
console.log(booleanToString('false')); //'true'
console.log(booleanToString('')); //"false"
