/*
 8 kyu 448
Multiply the number
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)
FUNDAMENTALS
*/

function multiply(number) {
  return (
    number * Math.pow(5, number >= 0 ? number.toString().length : number.toString().length - 1)
  );
}

console.log(multiply(10));
