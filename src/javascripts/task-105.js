/*6 kyu №105
Count the smiley faces!
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

REGULAR EXPRESSIONSFUNDAMENTALS
*/
function countSmileys(arr) {
  if (arr.length === 0) return 0;

  return arr.filter(el => {
    if (el.length === 2) {
      if ((el[0] === ':' || el[0] === ';') && (el[1] === ')' || el[1] === 'D')) return el;
    }
    if (el.length === 3) {
      if (
        (el[0] === ':' || el[0] === ';') &&
        (el[1] === '-' || el[1] === '~') &&
        (el[2] === ')' || el[2] === 'D')
      )
        return el;
    }
  }).length;
}

console.log(countSmileys([':)', ':(', ':D', ':O', ':;'])); // 2
