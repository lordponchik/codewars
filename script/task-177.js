/*8 kyu №177
Remove duplicates from list
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

FUNDAMENTALSARRAYSLISTS

*/
function distinct(a) {
  return [...new Set(a)];
}

console.log(distinct([1, 1, 2])); // [1,2]
