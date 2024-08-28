/*8 kyu №59
Fake Binary
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x) {
  return x
    .split('')
    .map(el => {
      if (Number(el) >= 0 && Number(el) < 5) return 0;
      if (Number(el) >= 5) return 1;
    })
    .join('');
}

console.log(fakeBin('45385593107843568')); //  "01011110001100111"
