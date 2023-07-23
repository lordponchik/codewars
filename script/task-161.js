/*8 kyu №161

Super Duper Easy
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

FUNDAMENTALS

*/

function problem(x) {
  //your code here
  return typeof x === 'string' ? 'Error' : x * 50 + 6;
}

console.log(problem(1)); // 56
