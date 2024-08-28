/*8 kyu №18

Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

function abbrevName(name) {
  // code away
  return name
    .split(' ')
    .map(el => el[0].toUpperCase())
    .join('.');
}

console.log(abbrevName('Sam Harris')); // S.H
console.log(abbrevName('evan Cole')); //E.C
