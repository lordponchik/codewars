/*
5 kyu №247
Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
REGULAR EXPRESSIONSALGORITHMS
*/

function pigIt(str) {
  //Code here
  return str
    .split(' ')
    .map(el => {
      if ("!@€£#$%^&*()_-+=}{[]|':;?/>.<,~".includes(el)) return el;
      return el.slice(1, el.length) + el[0] + 'ay';
    })
    .join(' ');
}

console.log(pigIt('Pig latin is cool')); //"igPay atinlay siay oolcay"
console.log(pigIt('Hello world !')); //"elloHay orldway !"
