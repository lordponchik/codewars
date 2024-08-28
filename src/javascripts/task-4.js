/*8 kyu №4

Grasshopper - Summation
Summation

Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)



*/

var summation = function (num) {
  let total = 0;

  for (let i = 0; i <= num; i += 1) {
    total += i;
  }
  return total;
};

console.log(summation(1)); //1
console.log(summation(2)); //3
console.log(summation(5)); //15
console.log(summation(8)); //36
