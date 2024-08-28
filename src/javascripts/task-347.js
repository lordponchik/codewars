/*
7 kyu 347
No oddities here
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

ARRAYSFUNDAMENTALS
*/
function noOdds(values) {
  // Return all non-odd values

  return values.filter(el => !(el % 2));
}

console.log(noOdds([0, 1, 2, 3]));
