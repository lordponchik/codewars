/*
8 kyu 305
Get number from string
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
STRINGSREGULAR EXPRESSIONSFUNDAMENTALS
*/
function getNumberFromString(s) {
  return !isNaN(s) ? Number(s) : Number([...s].filter(el => !isNaN(el) && el !== ' ').join(''));
}

console.log(getNumberFromString('156')); //156
console.log(getNumberFromString('$100 000 000')); //23
