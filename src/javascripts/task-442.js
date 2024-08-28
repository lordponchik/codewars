/*
8 kyu 442

Sum of differences in array
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

ARRAYSFUNDAMENTALS

*/

function sumOfDifferences(arr) {
  return [...arr]
    .sort((a, b) => b - a)
    .reduce((sum, el, i, arr) => {
      return i === arr.length - 1 ? (sum += 0) : (sum += el - arr[i + 1]);
    }, 0);
}

console.log(sumOfDifferences([2, 1, 10])); //9
console.log(sumOfDifferences([1, 2, 3])); //2
console.log(sumOfDifferences([-3, -2, -1])); // 2
