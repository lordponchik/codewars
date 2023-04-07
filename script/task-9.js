/*8 kyu №9

Convert number to reversed array of digits
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits 
of this number within an array in reverse order.
Example(Input => Output):

35231 => [1,3,2,5,3]
0 => [0]


*/

function digitize(n) {
  const arr = n
    .toString()
    .split('')
    .reverse()
    .map(el => Number(el));

  return arr;
}

console.log(digitize(35231)); //[1,3,2,5,3]
console.log(digitize(0)); //[0]
console.log(digitize(556978)); //[8,7,9,6,5,5]
