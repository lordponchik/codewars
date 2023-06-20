/*7 kyu №39

Beginner Series #3 Sum of Numbers
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.

FUNDAMENTALSALGORITHMS
*/

function getSum(a, b) {
  //Good luck!
  if (a === b) return a;

  let start = a;
  const arr = [];

  if (b > a) while (start <= b) arr.push(start++);

  if (b < a) while (start >= b) arr.push(start--);

  return arr.reduce((sum, el) => (sum += el));
}

console.log(getSum(1, 1)); //1
console.log(getSum(-1, 2)); // 2
console.log(getSum(0, -1)); // -1
