/*8 kyu №180
Correct the mistakes of the character recognition software
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

FUNDAMENTALSSTRINGS

*/
function correct(string) {
  // your code here
  return string
    .split('')
    .map(el => {
      switch (Number.parseInt(el)) {
        case 5:
          return 'S';
        case 0:
          return 'O';
        case 1:
          return 'I';
        default:
          return el;
      }
    })
    .join('');
}

console.log(correct('L0ND0N')); // "LONDON"
console.log(correct('51NGAP0RE')); // "SINGAPORE"
