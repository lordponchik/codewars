/*8 kyu №162

Sum of positive
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

ARRAYSFUNDAMENTALS
*/

function positiveSum(arr) {
  return arr.reduce((total, el) => {
    return (total += el > 0 ? el : 0);
  }, 0);
}

console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
