/*7 kyu №82
Find the stray number
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
FUNDAMENTALSALGORITHMS
*/

function stray(numbers) {
  const sortArr = numbers.sort((a, b) => a - b);

  return sortArr[0] === sortArr[1] ? sortArr[sortArr.length - 1] : sortArr[0];
}

console.log(stray([2, 1, 1])); //  2
