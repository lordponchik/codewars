/*7 kyu №20
Isograms
An isogram is a word that has no repeating 
letters, consecutive or non-consecutive. Implement 
a function that determines whether a string that contains 
only letters is an isogram. Assume the empty string 
is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false


*/

function isIsogram(str) {
  //...
  str = str.toUpperCase();

  if (str.length === 0) {
    return true;
  }

  return [...str]
    .map((el, i, arr) => arr.includes(el) && i !== arr.indexOf(el))
    .every(el => el === false);
}

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('moose')); //false
console.log(isIsogram('')); //true
