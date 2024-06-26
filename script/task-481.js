/*
8 kyu 481

Merging sorted integer arrays (without duplicates)
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

ARRAYSFUNDAMENTALS
*/

function mergeArrays(a, b) {
  // your code here

  return [...new Set([...a, ...b])].sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])); //[1, 2, 3, 4, 5, 6]
