/*
6 kyu 356
Multiples of 3 or 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

MATHEMATICSALGORITHMS
*/
function solution(number) {
  let total = 0;

  for (let i = 0; i < number; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      total += i;
      continue;
    }
    if (i % 3 === 0) {
      total += i;
    }
    if (i % 5 === 0) {
      total += i;
      continue;
    }
  }
  return total;
}

console.log(solution(10)); // // 23
console.log(solution(16)); // // 60
