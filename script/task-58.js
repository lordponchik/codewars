/*8 kyu №58
Remove exclamation marks
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
  return s
    .split('')
    .filter(el => el !== '!')
    .join('');
}

console.log(removeExclamationMarks('Hello World!')); //  "Hello World"
