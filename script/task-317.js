/*
8 kyu 317
Pythagorean Triple
Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

A Pythagorean Triple consists of arranging 3 integers, such that:

a2 + b2 = c2
*/
function isPythagoreanTriple(integers) {
  // Good luck friends!
  integers = integers.sort((a, b) => a - b);

  return integers[0] ** 2 + integers[1] ** 2 === integers[2] ** 2;
}

console.log(isPythagoreanTriple([3, 4, 5])); // true  9+16=25
console.log(isPythagoreanTriple([3, 5, 9])); // false 9+25!=81
console.log(isPythagoreanTriple([72, 78, 30])); // true
console.log(isPythagoreanTriple([5, 12, 13])); // true
