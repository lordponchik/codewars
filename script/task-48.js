/*8 kyu №48
Simple multiplication
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

function simpleMultiplication(number) {
  // your code........

  return number % 2 === 0 ? number * 8 : number * 9;
}
console.log(simpleMultiplication(2)); // 16
console.log(simpleMultiplication(1)); // 9
