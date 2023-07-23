/*8 kyu №148
8 kyu
Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
FUNDAMENTALS
*/

// complete the function
function replace(s) {
  //coding and coding....
  const arrVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return [...s].map(el => (arrVowels.includes(el) ? '!' : el)).join('');
}

console.log(replace('ABCDE')); // "!BCD!"
