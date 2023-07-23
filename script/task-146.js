/*8 kyu №146
Reversed Strings
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
STRINGSFUNDAMENTALS
*/

// complete the function
function solution(str) {
  return str.split('').reverse().join('');
}

console.log(solution('world')); // "dlrow"
