/*7 kyu №222
Most digits
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

STRINGSFUNDAMENTALS
*/
function findLongest(array) {
  // code here
  return array.sort((a, b) => b.toString().length - a.toString().length)[0];
}

console.log(findLongest([1, 100, 150])); // 100
