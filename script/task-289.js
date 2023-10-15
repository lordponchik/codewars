/*
8 kyu 289
Type of sum
Return the type of the sum of the two arguments

FUNDAMENTALS
*/

function typeOfSum(a, b) {
  // good luck
  return typeof (a + b);
}

console.log(typeOfSum('d', 1)); //"string"
console.log(typeOfSum(1, 2)); //"number"
