/*6 kyu №46
Sort the odd
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
FUNDAMENTALSARRAYSSORTING
*/

function sortArray(array) {
  // Return a sorted array.
  const odd = array.filter(el => el % 2 !== 0);
  const even = array.filter(el => el % 2 === 0);
  const sortOdd = odd.sort((a, b) => a - b);
  const resultArr = [...sortOdd];
  const checkArr = [...array];

  if (even.length === 0) return sortOdd;

  while (even.length >= 1) {
    resultArr.splice(checkArr.indexOf(even[0]), 0, even[0]);
    checkArr.splice(checkArr.indexOf(even[0]), 1, '0');
    even.splice(0, 1);
  }

  return resultArr;
}

console.log(sortArray([7, 1])); //[1, 7];
console.log(sortArray([5, 8, 6, 3, 4])); //[3, 8, 6, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); // [1,3,5,8,0]
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); //[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
// console.log(sortArray([]));
console.log(sortArray([48, -36, -15, -30, -38, -3, -6, 7, -6, 41])); // [48, -36, -15, -30, -38, -3, -6, 7, -6, 41];
