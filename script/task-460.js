/*
8 kyu 460
Changing letters
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

FUNDAMENTALSSTRINGS
*/

function swap(string) {
  const arrVowels_en = ['a', 'e', 'i', 'o', 'u'];

  return [...string]
    .map(el => {
      return arrVowels_en.includes(el) ? el.toUpperCase() : el;
    })
    .join('');
}
