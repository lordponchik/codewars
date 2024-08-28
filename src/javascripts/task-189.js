/*8 kyu №189

Hex to Decimal
Complete the function which converts hex number (given as a string) to a decimal number.

FUNDAMENTALS
*/

function hexToDec(hexString) {
  //your code here
  return Number.parseInt(hexString, 16);
}

console.log(hexToDec('FF')); // 255
