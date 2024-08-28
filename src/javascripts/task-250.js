/*
8 kyu №250
Are You Playing Banjo?
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

STRINGSFUNDAMENTALS
*/

function areYouPlayingBanjo(name) {
  // Implement me
  return name.toLowerCase()[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo('Adam')); // "Adam does not play banjo"
console.log(areYouPlayingBanjo('Ringo')); // "Ringo plays banjo"
