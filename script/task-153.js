/*7 kyu №153
Maximum Length Difference
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string

Now if you are wondering what this kata want's you to do, here:

Find maximum and minimum in both arrays
Compare maximum from array1 with minimum of array2
Compare maximum from array2 with minimum of array1
Return the maximum from botrh comparisions

The title of this Kata is the best description of what to do. The actaul description is a bit misleading. 
So, just think, what is the "Maximun length difference" between the strings of each list.
FUNDAMENTALS
*/

// complete the function
function mxdiflg(a1, a2) {
  // your code
  if (a1.length === 0 || a2.length === 0) return -1;

  const a1Length = a1.map(el => el.length);
  const a2Length = a2.map(el => el.length);

  return Math.max(
    Math.max(...a1Length) - Math.min(...a2Length),
    Math.max(...a2Length) - Math.min(...a1Length)
  );
}

console.log(
  mxdiflg(
    [
      'hoqq',
      'bbllkw',
      'oox',
      'ejjuyyy',
      'plmiis',
      'xxxzgpsssa',
      'xxwwkktt',
      'znnnnfqknaz',
      'qqquuhii',
      'dvvvwz',
    ],
    ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']
  )
); //13
//11 10 ... 16 3
