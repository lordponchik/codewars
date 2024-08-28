/*8 kyu №179
Sum of Multiples
Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
FUNDAMENTALS

*/
function sumMul(n, m) {
  //your idea here
  let sum = 0;

  if (n >= m) return 'INVALID';

  for (let i = n; i < m; i += 1) {
    if (i % n === 0) sum += i;
  }

  return sum;
}

console.log(sumMul(44, 6336)); // 453024
console.log(sumMul(3, 13)); // 30
console.log(sumMul(0, 0)); // "INVALID"
console.log(sumMul(4, -7)); // "INVALID"
