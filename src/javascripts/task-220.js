/*7 kyu №220
Find the capitals
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
STRINGSARRAYSFUNDAMENTALS
*/
var capitals = function (word) {
  // Write your code here
  const arr = [];

  return word
    .split('')
    .map((el, i) => {
      if (el.toUpperCase() === el) return i;
      return el;
    })
    .filter(el => typeof el !== 'string');
};

console.log(capitals('CodEWaRs')); // [0,3,4,6]
