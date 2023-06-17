/*8 kyu №25

Calculate average
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

function findAverage(array) {
  // your code here

  if (array.length > 0)
    return (
      array.reduce((total, el) => {
        return total + el;
      }) / array.length
    );

  return 0;
}

console.log(findAverage([1, 1, 1])); // 1
console.log(findAverage([1, 2, 3])); // 2
console.log(findAverage([1, 2, 3, 4])); // 2.5
console.log(findAverage([])); // 0
