/*7 kyu №54

Vowel Count
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

STRINGSFUNDAMENTAL
*/

function getCount(str) {
  return str
    .split('')
    .filter(el => el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u').length;
}

console.log(getCount('abracadabra')); // 5
