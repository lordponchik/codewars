/*7 kyu №213
Largest pair sum in array
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.

FUNDAMENTALS
*/
function largestPairSum(numbers) {
  //TODO: Write your Code here
  const arr = numbers.sort((a, b) => b - a);

  return arr[0] + arr[1];
}

console.log(largestPairSum([99, 2, 2, 23, 19])); // 122
