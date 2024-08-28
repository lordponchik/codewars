/*7 kyu №172
Count the divisors of a number
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

NUMBER THEORYMATHEMATICSFUNDAMENTALS
*/

function getDivisorsCnt(n) {
  // todo
  const arr = [];

  for (let i = 1; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      arr.push(i);
      arr.push(n / i);
    }
  }

  return [...new Set(arr)].length;
}

console.log(getDivisorsCnt(10)); // 4
console.log(getDivisorsCnt(11)); // 4
console.log(getDivisorsCnt(244)); // 6
console.log(getDivisorsCnt(54)); // 8
