/*7 kyu №127
Is this a triangle?
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

MATHEMATICSFUNDAMENTALS
*/

function isTriangle(a, b, c) {
  const arr = [...arguments].sort((a, b) => b - a);

  return arr[0] < arr[1] + arr[2];
}

console.log(isTriangle(7, 2, 2)); // false
