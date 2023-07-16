/*8 kyu №131
Removing Elements
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

LISTSARRAYSFUNDAMENTALS
*/

function removeEveryOther(arr) {
  //your code here
  return arr.filter((el, i) => i % 2 === 0);
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[1, 3, 5, 7, 9]
