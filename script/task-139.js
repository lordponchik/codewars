/*7 kyu №139

Fix string case
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!

Please also try:

Simple time difference

Simple remove duplicates

FUNDAMENTALS
*/

function solve(s) {
  //..
  const quantityLowercaseLetter = s.split('').filter(el => el === el.toLowerCase());
  const quantityUppercaseLetter = s.split('').filter(el => el === el.toUpperCase());

  return quantityLowercaseLetter.length === quantityUppercaseLetter.length ||
    quantityLowercaseLetter.length > quantityUppercaseLetter.length
    ? s.toLowerCase()
    : s.toUpperCase();
}

console.log(solve('CODe')); //"CODE"
