/*
8 kyu №267
Stringy Strings
write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.

STRINGSBINARYALGORITHMS
*/

// write the function isAnagram

function stringy(size) {
  // your code here
  let arr = [];

  for (let i = 0; i < size; i += 1) {
    if (i % 2 === 0) {
      arr.push('1');
      continue;
    }
    arr.push('0');
  }

  return arr.join('');
}

console.log(stringy('5')); //"10101"
