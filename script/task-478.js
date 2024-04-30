/*
7 kyu 478
All Star Code Challenge #3
This Kata is intended as a small challenge for my students

Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

Example (Input --> Output)

"drake" --> "drk"
"aeiou" --> ""
remove_vowels("drake") // => "drk"
remove_vowels("aeiou") // => ""
FUNDAMENTALS

*/
const arrVowels_en = ['a', 'e', 'i', 'o', 'u'];

var removeVowels = function (str) {
  return [...str].filter(el => !arrVowels_en.includes(el)).join('');
};
