/*
8 kyu 295
Grasshopper - Combine strings
Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'
FUNDAMENTALS
*/
function combineNames(name, surname) {
  return `${name} ${surname}`;
}

console.log(combineNames('James', 'Stevens')); // "James Stevens"
