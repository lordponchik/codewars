/*7 kyu №108

Summing a number's digits
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

FUNDAMENTALS
*/
function sumDigits(number) {
  if (number < 0) number *= -1;

  return number
    .toString()
    .split('')
    .reduce((sum, el) => {
      return (sum += Number(el));
    }, 0);
}

console.log(sumDigits(-32)); // 18
