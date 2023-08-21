/*8 kyu №227
Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
FUNDAMENTALS
*/
function remove(s, n) {
  //coding and coding....
  const arr = s.split('');

  for (let i = 0; i < s.split('').length; i += 1) {
    if (n === 0) {
      break;
    }
    if (arr[i] === '!') {
      arr.splice(i, 1, '-');
      n -= 1;
    }
  }

  return arr.join('').replaceAll('-', '');
}

console.log(remove('!!!Hi !!hi!!! !hi', 1)); //"!!Hi !!hi!!! !hi"
