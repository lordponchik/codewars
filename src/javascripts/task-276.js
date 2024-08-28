/*
8 kyu 276
Vowel remover
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
STRINGSFUNDAMENTALS
*/

function shortcut(string) {
  const arrVowels = ['a', 'e', 'i', 'o', 'u'];
  return [...string].filter(el => !arrVowels.includes(el)).join('');
}

console.log(shortcut('hello')); //"hll"
