/*
6 kyu №249
Find the odd int
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

FUNDAMENTALS
*/

function findOdd(A) {
  //happy coding!
  if (A.length === 1) return A[0];

  A.sort((a, b) => a - b);

  A = A.splice(0, A.length);

  let arr = [[A[0]]];
  let step = 0;

  for (let i = 1; i < A.length; i += 1) {
    if (arr[step].includes(A[i])) {
      arr[step].push(A[i]);
    } else {
      arr.push([A[i]]);
      step += 1;
    }
  }

  return arr.filter(el => el.length % 2 !== 0)[0][0];
}

console.log(findOdd([7])); //7
console.log(findOdd([1, 1, 2])); //2
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); //4;
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); //1
