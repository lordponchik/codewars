/*7 kyu №149
Alternate capitalization
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity

STRINGSFUNDAMENTALS
*/

// complete the function
function capitalize(s) {
  const arr = ['', ''];
  const arrS = s.split('');

  for (let i = 0; i < arrS.length; i += 1) {
    if (i % 2 === 0) {
      arr[0] += arrS[i].toUpperCase();
      arr[1] += arrS[i];
    } else {
      arr[0] += arrS[i];
      arr[1] += arrS[i].toUpperCase();
    }
  }

  return arr;
}

console.log(capitalize('abcdef')); // "['AbCdEf', 'aBcDeF']"
