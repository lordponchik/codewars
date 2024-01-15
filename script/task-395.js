/*
7 kyu 395
Indexed capitalization
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

Good luck!

Be sure to also try:

Alternate capitalization

String array revisal

FUNDAMENTALS
*/

function capitalize(s, arr) {
  return [...s]
    .map((el, i) => {
      if (arr.includes(i)) return el.toUpperCase();
      return el;
    })
    .join('');
}

console.log(capitalize('abcdef', [1, 2, 5])); //"aBCdeF"
