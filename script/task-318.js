/*
8 kyu 318
Sorted? yes? no? how?
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

ARRAYSSORTINGFUNDAMENTALS
*/
function isSortedAndHow(array) {
  if (array[0] === Math.min(...array) && array[array.length - 1] === Math.max(...array))
    return 'yes, ascending';
  if (array[0] === Math.max(...array) && array[array.length - 1] === Math.min(...array))
    return 'yes, descending';
  return 'no';
}

console.log(isSortedAndHow([1, 2])); // "yes, ascending"
console.log(isSortedAndHow([15, 7, 3, -8])); // "yes, descending"
console.log(isSortedAndHow([4, 2, 30])); // "no"
