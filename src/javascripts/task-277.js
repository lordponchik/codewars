/*
7 kyu 277
Greet Me
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
STRINGSFUNDAMENTALS
*/
var greet = function (name) {
  return `Hello ${name.toLowerCase().replace(name[0].toLowerCase(), name[0].toUpperCase())}!`;
};
console.log(greet('billy'));
