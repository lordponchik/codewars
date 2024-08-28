/*
7 kyu 309
Even numbers in an array
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
FUNDAMENTALSARRAYS
*/
function evenNumbers(array, number) {
  // good luck
  const newArr = [];
  const arrayReverse = array.reverse();

  for (let i = 0; i < arrayReverse.length; i++) {
    if (arrayReverse[i] % 2 === 0) {
      newArr.push(arrayReverse[i]);
    }
    if (newArr.length === number) break;
  }

  return newArr.reverse();
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); //[4,6,8]
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)); //[-8,26]
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); //[6]
