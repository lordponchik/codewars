/*8 kyu №52
 You only need one - Beginner
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

FUNDAMENTALSSTRINGSARRAYS
*/

function check(a, x) {
  // your code here

  return a.includes(x);
}

console.log(check([66, 101], 66)); // true
console.log(check([66, 101], 67)); // false
