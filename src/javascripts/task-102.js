/*8 kyu №102
Count of positives / sum of negatives
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

FUNDAMENTALSARRAYSLISTS
*/
function countPositivesSumNegatives(input) {
  // your code here
  if (input == null) return [];
  else if (input.length === 0) return [];

  const countPositives = input.filter(el => el > 0).length;
  const sumNegatives = input
    .filter(el => el < 0)
    .reduce((sum, el) => {
      return (sum += el);
    }, 0);

  return [countPositives, sumNegatives];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); //[10,-65]
console.log(countPositivesSumNegatives(null));
