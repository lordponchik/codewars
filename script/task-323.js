/*
7 kyu 323
Sort by Last Char
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

FUNDAMENTALSSTRINGSARRAYSSORTING
*/
function last(x) {
  return x
    .split(' ')
    .map(el => [...el].reverse().join(''))
    .sort((a, b) => {
      if (a[0] === b[0]) return 0;
      if (a < b) return -1;
      if (b > a) return 1;
      return 0;
    })
    .map(el => [...el].reverse().join(''));
}

console.log(last('man i need a taxi up to ubud')); // ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(last('what time are we climbing up the volcano')); // ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
