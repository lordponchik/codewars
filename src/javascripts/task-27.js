/*7 kyu №27
String ends with?
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
STRINGSFUNDAMENTALS
*/

function solution(str, ending) {
  // TODO: complete
  if (ending.length === 0) return true;

  return str.slice(-ending.length) === ending;
}

console.log(solution('abcde', 'cde')); // true
console.log(solution('abcde', 'abc')); // false
