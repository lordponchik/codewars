/*8 kyu №47
Beginner - Reduce but Grow
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x) {
  return x.reduce((res, el) => (res *= el));
}

console.log(grow([1, 2, 3])); // 6
