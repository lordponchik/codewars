/*8 kyu №195
Enumerable Magic #25 - Take the First N Elements
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/

// Sum Numbers
function take(arr, n) {
  // Your code here
  return arr.slice(0, n);
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3)); //[0, 1, 2]
