/*
7 kyu 333
Simple Fun #176: Reverse Letter
Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
FUNDAMENTALS
*/
function reverseLetter(str) {
  //coding and coding..
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

  return str
    .split('')
    .reverse()
    .filter(el => arr_en.includes(el))
    .join('');
}

console.log(reverseLetter('krishan')); //nahsirk
console.log(reverseLetter('ultr53o?n')); //nortlu
console.log(reverseLetter(',6iqbwyarbc99nbvisjgkyghuvujm2pr7oee+nr9qf{ylxcp'));
