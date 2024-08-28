/*
8 kyu 322

Alternate case
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

FUNDAMENTALS
*/
function alternateCase(s) {
  return [...s]
    .map(el => {
      if (el.toLowerCase() === el) return el.toUpperCase();
      return el.toLowerCase();
    })
    .join('');
}

console.log(alternateCase('Hello World')); // ""hELLO wORLD""
