/*
7 kyu 351
Simple remove duplicates
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!

FUNDAMENTALS
*/
function solve(arr) {
  const arr_1 = [];

  arr.reverse().map(el => {
    if (!arr_1.includes(el)) {
      arr_1.push(el);
    }
  });

  return arr_1.reverse();
}

console.log(solve([3, 4, 4, 3, 6, 3])); // [4,6,3]
