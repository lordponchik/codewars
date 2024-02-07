/*
7 kyu 419

Array Array Array
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

FUNDAMENTALSSTRINGSARRAYS
*/
function explode(x) {
  if (typeof x[0] === 'string' && typeof x[1] === 'string') return 'Void!';

  const quantity =
    typeof x[0] === 'number' && typeof x[1] === 'number'
      ? x[0] + x[1]
      : typeof x[0] === 'number'
      ? x[0]
      : x[1];
  const arr = [];

  while (arr.length < quantity) {
    arr.push(x);
  }

  return arr;
}
