/*
7 kyu 445

Basic Math (Add or Subtract)
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
STRINGSFUNDAMENTALS

*/

function calculate(str) {
  //your code here...
  return str
    .replaceAll('plus', '.plus.')
    .replaceAll('minus', '.minus.')
    .split('.')
    .reduce((total, el, i, arr) => {
      if (i === 0) return (total += +el);
      if (i % 2 === 0) return arr[i - 1] === 'plus' ? (total += +el) : (total -= +el);
      return (total += 0);
    }, 0)
    .toString();
}

console.log(calculate('1plus2plus3plus4')); //10
console.log(calculate('1plus2plus3plus4minus1')); // 9
