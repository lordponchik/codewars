/*7 kyu №66
Mumbling
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

FUNDAMENTALSSTRINGSPUZZLES
*/

function accum(s) {
  // your code
  let step = 0;

  return s
    .split('')
    .map(el => {
      return el[0].toUpperCase() + el.repeat(step++).toLowerCase();
    })
    .join('-');
}

console.log(accum('ZpglnRxqenU')); //  Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu
