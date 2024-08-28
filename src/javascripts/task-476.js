/*
7 kyu 476
Longest vowel chain
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, 
return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

If you like substring Katas, please try:

Non-even substrings

Vowel-consonant lexicon

STRINGSFUNDAMENTALS
*/
const vowels = 'aeiou';

function solve(s) {
  const vowel_groups = [...s]
    .reduce((arr, el, i, array) => {
      if (vowels.includes(el)) {
        if (arr.length === 0) {
          arr.push(el);
          return arr;
        }
        if (vowels.includes(array[i - 1])) {
          arr[arr.length - 1] += el;
          return arr;
        }
        arr.push(el);
        return arr;
      }
      return arr;
    }, [])
    .map(el => el.length);

  return Math.max(...vowel_groups);
}

console.log(solve('codewarriors')); // 2
console.log(solve('suoidea')); // 3
