/*
8 kyu 439

Simple validation of a username with regex
Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

REGULAR EXPRESSIONSFUNDAMENTALS
*/

function validateUsr(username) {
  return (
    username.length >= 4 &&
    username.length <= 16 &&
    username === username.toLowerCase() &&
    [...username].every(el => !`!@€£#$%^&*()-+= }{[]|':;?/>.<,~"`.includes(el))
  );
}

console.log(isAllPossibilities([0, 1, 2, 3])); // true
