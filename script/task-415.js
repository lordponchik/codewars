/*
7 kyu 415
Simple consecutive pairs
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
More examples in the test cases.

Good luck!

Please also try Simple time difference

ARRAYSFUNDAMENTALS
*/
function pairs(ar) {
  //..

  return [...ar]
    .map((el, i, arr) => {
      if (i % 2 === 0) return [el, arr[i + 1]];
    })
    .filter(el => {
      if (el === undefined) return;
      if (el[0] - 1 === el[1] || el[0] + 1 === el[1]) return el;
    }).length;
}

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5])); // 3
console.log(
  pairs([
    -27, -26, -87, -88, 61, 60, -8, -7, -38, 18, -39, -47, 38, -46, -91, 39, -90, 57, 58, -82, -83,
    -15, -14, 44, 43, 45, 33, 44, 23, 3, 22, -47, 38, -46, -72, -71, 0, 1, 71, 23, 72, -33, -32, 90,
    91, 96, 47, 95, 8, 7, -64, 32, -65, -74, -73, 47, 44, 46, -75, -74, -4, -3, 41, 40, -78, -77,
  ])
);
