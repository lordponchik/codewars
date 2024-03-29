/*
7 kyu №262
Anagram Detection
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

STRINGSFUNDAMENTALS
*/

// write the function isAnagram
var isAnagram = function (test, original) {
  let arr = test.toLowerCase().split('');
  const originalArr = original.toLowerCase().split('');

  for (let i = 0; i < original.length; i += 1) {
    if (!arr.includes(originalArr[i])) {
      return false;
    }
    arr.splice(arr.indexOf(originalArr[i]), 1);
  }

  return arr.length === 0;
};

console.log(isAnagram('foefet', 'toffee')); // 7
