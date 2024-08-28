/*6 kyu №151
Give me a Diamond
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
STRINGSASCII ARTFUNDAMENTALS
*/

// complete the function
function diamond(n) {
  if (n % 2 === 0 || n <= 0) return null;

  let str = '';
  const star = '*';
  let step = 1;

  for (let i = 1; i <= n; i += 1) {
    str += ' '.repeat((n - step) / 2) + star.repeat(step) + '\n';
    Math.round(n / 2) > i ? (step += 2) : (step -= 2);
  }

  return str;
}

console.log(diamond(5)); // " *\n***\n *\n"
