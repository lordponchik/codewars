/*7 kyu №91
Exes and Ohs
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
FUNDAMENTALS
*/
function XO(str) {
  //code here

  const value = str
    .toLowerCase()
    .split('')
    .reduce((total, el) => {
      if (el === 'x') total += 1;
      if (el === 'o') total -= 1;
      return total;
    }, 0);

  return value === 0;
}

console.log(XO('xxOo')); // true
console.log(XO('xxxm')); // false
