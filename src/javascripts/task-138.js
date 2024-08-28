/*8 kyu №138

Find the position!
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

FUNDAMENTALS
*/

function position(letter) {
  //Write your own Code!
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

  return `Position of alphabet: ${arr_en.indexOf(letter) + 1}`;
}

console.log(position('h')); //8
