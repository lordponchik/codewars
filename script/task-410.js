/*
5 kyu 410
The Hashtag Generator
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
STRINGSALGORITHMS 
*/
function generateHashtag(str) {
  if (str.trim().length === 0) return false;
  const hashTagStr = `#${str
    .split(' ')
    .filter(el => {
      if (el.length !== 0) return el;
    })
    .map(el => el.replace(el[0], el[0].toUpperCase()))
    .join('')}`;

  return hashTagStr.length > 140 ? false : hashTagStr;
}

console.log(generateHashtag('')); //false
console.log(generateHashtag(' '.repeat(200))); // false
console.log(generateHashtag('Do We have A Hashtag'));
console.log(generateHashtag('a'.repeat(140))); // false
console.log(generateHashtag('Codewars')); //#Codewars
console.log(generateHashtag(' Hello there thanks for trying my Kata')); //"#HelloThereThanksForTryingMyKata"
console.log(generateHashtag(' Hello     Word    ')); //"#HelloWorld"
