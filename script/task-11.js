/*8 kyu №11

Square(n) Sum

Complete the square sum function so that it squares each number passed 
into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.


*/

function squareSum(numbers) {
  return numbers.reduce((total, el) => {
    return (total += Math.pow(el, 2));
  }, 0);
}

console.log(squareSum([1, 2, 2])); //9
console.log(squareSum([1, 1, 1, 1])); //4
console.log(squareSum([0, 3, 4, 5])); //50
console.log(squareSum([])); //0
