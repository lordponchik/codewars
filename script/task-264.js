/*
7 kyu №264
Find the index of the second occurrence of a letter in a string
In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

Examples:

secondSymbol('Hello world!!!','l')  --> 3
secondSymbol('Hello world!!!', 'A') --> -1
Good luck ;) And don't forget to rate this Kata if you liked it.

FUNDAMENTALSSTRINGS
*/

// write the function isAnagram
function secondSymbol(s, symbol) {
  // your code
  const arrS = [...s];

  for (let i = 0; i < arrS.length; i += 1) {
    if (arrS[i] === symbol && arrS.indexOf(arrS[i]) !== i) {
      return i;
    }
  }

  return -1;
}

console.log(secondSymbol('Hello world!!!', 'l')); //3
console.log(secondSymbol('Hello world!!!', 'A')); // -1
console.log(secondSymbol('Hello world!!!', 'o')); //7
