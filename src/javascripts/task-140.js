/*6 kyu №140

Break camelCase
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
STRINGSFUNDAMENTALS
*/

// complete the function
function solution(string) {
  let arr = string.split('');
  let result = [...arr];
  let step = 1;

  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i + 1] === arr[i + 1].toUpperCase()) {
      result.splice(i + step++, 0, ' ');
    }
  }

  return result.join('');
}

console.log(solution('camelCasingTest')); //'camel Casing Test'
console.log(solution('identifier')); //"identifier"
