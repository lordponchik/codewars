/*5 kyu №129
String incrementer
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

REGULAR EXPRESSIONSSTRINGS
*/

function incrementString(strng) {
  // return incrementedString

  const arrStrNumber = strng
    .split('')
    .reverse()
    .map(el => Number(el));
  let strNumber = [];

  for (let i = 0; i < arrStrNumber.length; i += 1) {
    if (isNaN(arrStrNumber[i])) break;

    strNumber.push(arrStrNumber[i]);
  }

  strNumber = strNumber.reverse();
  const str = strNumber.length === 0 ? strng : strng.split('').slice(0, -strNumber.length).join('');
  const number = (Number(strNumber.join('')) + 1).toString().split('');

  return number.length >= strNumber.length
    ? str + number.join('')
    : str + strNumber.join('').slice(0, -number.length) + number.join('');
}

console.log(incrementString('foobar000')); // "foobar001"
console.log(incrementString('foobar999')); //"foobar1000"
console.log(incrementString('foobar00999')); //"foobar01000"
console.log(incrementString('foo')); //"foo1"
console.log(incrementString('foobar001')); //"foobar002"
console.log(incrementString('foobar1')); //"foobar2"
console.log(incrementString('1')); // "2"
console.log(incrementString('009')); // "010"
console.log(incrementString('fo99obar99')); //"fo99obar100"
