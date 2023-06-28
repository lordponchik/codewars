/*7 kyu №68
Shortest Word
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  const arr = s.split(' ').map(el => el.length);

  return Math.min(...arr);
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps')); //  3
