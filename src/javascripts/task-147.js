/*5 kyu №147
Rot13
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

CIPHERSFUNDAMENTALS
*/

// complete the function
function rot13(message) {
  //your code here
  const arr_en = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  console.log(arr_en.indexOf('n'.toLowerCase()) + 13 - arr_en.length);
  return message
    .split('')
    .map(el => {
      if (arr_en.includes(el.toLowerCase())) {
        const letter =
          arr_en[
            arr_en.indexOf(el.toLowerCase()) + 13 >= arr_en.length
              ? arr_en.indexOf(el.toLowerCase()) + 13 - arr_en.length
              : arr_en.indexOf(el.toLowerCase()) + 13
          ];

        return el === el.toUpperCase() ? letter.toUpperCase() : letter;
      }
      return el;
    })
    .join('');
}

console.log(rot13('test')); // "grfg"
console.log(rot13('Test')); // "Grfg"
console.log(rot13('abcdefghijklmnopqrstuvwxyz')); // nopqrstuvwxyzabcdefghijklm
