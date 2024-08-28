/*7 kyu №16
Reverse words
Complete the function that accepts a string parameter, 
and reverses each word in the string. All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"


*/

function reverseWords(str) {
  // Go for it
  return str
    .split(' ')
    .map(el => el.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWords('man i need a taxi up to ubud')); // 'nam i deen a ixat pu ot dubu'
console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); //''ehT kciuq nworb xof spmuj revo eht yzal .god')'
