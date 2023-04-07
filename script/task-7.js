/*8 kyu №7

Convert a string to an array

Write a function to split a string and convert it into an array of words.
Examples (Input ==> Output):

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]



*/

function stringToArray(string) {
  const arr = string.split(' ');
  return arr;
}

console.log(stringToArray('Robin Singh')); //["Robin", "Singh"]
console.log(stringToArray('I love arrays they are my favorite')); //["I", "love", "arrays", "they", "are", "my", "favorite"]
console.log(stringToArray('Hello my God')); //["Hello", "my", "God"]
