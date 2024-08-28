/*8 kyu №241
Exclamation marks series #2: Remove all exclamation marks from the end of sentence
Description:
Remove all exclamation marks from the end of sentence.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
FUNDAMENTALS
*/
function remove(string) {
  let arr = string.split('').reverse();

  for (let i = 0; i <= string.split('').length; ) {
    if (arr[i] !== '!') break;
    arr.splice(i, 1);
  }

  return arr.reverse().join('');
}

console.log(remove('Hi!!!')); //"Hi"
