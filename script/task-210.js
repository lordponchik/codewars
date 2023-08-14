/*8 kyu №210
Find Nearest square number
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

Good luck :)

Check my other katas:

Alphabetically ordered

Case-sensitive!

Not prime numbers

Find your caterer

FUNDAMENTALSMATHEMATICS
*/
function nearestSq(n) {
  // your code
  const sqrtN = Math.sqrt(n);

  return Math.trunc(sqrtN) === sqrtN
    ? n
    : n - Math.trunc(sqrtN) ** 2 < (n - (Math.trunc(sqrtN) + 1) ** 2) * -1
    ? Math.trunc(sqrtN) ** 2
    : (Math.trunc(sqrtN) + 1) ** 2;
}

console.log(nearestSq(9)); // 9
console.log(nearestSq(111)); // 121
console.log(nearestSq(10)); // 9
