/*
8 kyu 363

Parse float
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

FUNDAMENTALS
*/
function parseF(s) {
  return !isNaN(parseFloat(s)) ? parseFloat(s) : null;
}

console.log(parseF('one'));
