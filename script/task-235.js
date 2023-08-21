/*6 kyu №235
Find the missing letter
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

MATHEMATICSALGORITHMS
*/
function findMissingLetter(array) {
  const arr_en = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let startingIndex = arr_en.indexOf(array[0].toLowerCase());
  let letter = '';

  for (let i = 0; i < array.length; i += 1) {
    if (arr_en[i + startingIndex + 1].toLowerCase() !== array[i + 1].toLowerCase()) {
      letter = arr_en[i + startingIndex + 1];
      break;
    }
  }

  return array[0] === array[0].toLowerCase() ? letter : letter.toUpperCase();
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); //"e"
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); // "P"
console.log(findMissingLetter(['J', 'K', 'L', 'M', 'O', 'P', 'Q'])); //"N"
