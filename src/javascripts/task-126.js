/*7 kyu №126
Descending Order
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

FUNDAMENTALS
*/

function descendingOrder(n) {
  //...

  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => Number(b) - Number(a))
      .join('')
  );
}

console.log(descendingOrder(1021)); // 2110
