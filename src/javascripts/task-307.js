/*
8 kyu 307
No zeros for heros
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

FUNDAMENTALS
*/
function noBoringZeros(n) {
  // your code
  const arrReverse = [...String(n)].reverse();
  let index;

  for (let i = 0; i < arrReverse.length; i++) {
    if (arrReverse[i] !== '0') {
      index = i;
      break;
    }
  }

  return index === 0 ? n : Number(String(n).slice(0, -index));
}
console.log(noBoringZeros(-105)); //145
