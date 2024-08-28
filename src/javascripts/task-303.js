/*
8 kyu 303
get character from ASCII Value
Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:

65 --> 'A'
97 --> 'a'
48 --> '0
For ASCII table, you can refer to http://www.asciitable.com/

FUNDAMENTALS
*/
function getChar(c) {
  // ...
  return String.fromCharCode(c);
}

console.log(getChar(55)); //"7"
