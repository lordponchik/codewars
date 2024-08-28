/*7 kyu №125
Small enough? - Beginner
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

FUNDAMENTALSARRAYS
*/

function smallEnough(a, limit) {
  return a.every(el => el <= limit);
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // false
