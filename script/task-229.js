/*7 kyu №229
Sum of Cubes
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
FUNDAMENTALS
*/
function sumCubes(n) {
  // ...
  let sum = 0;

  while (n >= 1) {
    sum += Math.pow(n, 3);
    n -= 1;
  }

  return sum;
}

console.log(sumCubes(3)); //36
