/*
Convert string to camel case
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

REGULAR EXPRESSIONSALGORITHMSSTRINGS
*/
function toCamelCase(str) {
  const symbols = `-_`;

  return [...str]
    .map(el => {
      return symbols.includes(el) ? ' ' : el;
    })
    .join('')
    .split(' ')
    .map((el, i) => {
      if (i === 0) return el;

      return el.replace(el[0], el[0].toUpperCase());
    })
    .join('');
}

console.log(toCamelCase('the-stealth-warrior')); // "theStealthWarrior"
console.log(toCamelCase('The_Stealth_Warrior')); // "TheStealthWarrior"
console.log(toCamelCase('The_Stealth-Warrior')); // "TheStealthWarrior"
