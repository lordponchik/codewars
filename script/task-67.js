/*8 kyu №67
Grasshopper - Personalized Message
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
FUNDAMENTALSSTRINGS
*/

function greet(name, owner) {
  // Add code here
  return name === owner ? 'Hello boss' : 'Hello guest';
}

console.log(greet('Daniel', 'Daniel')); //  Hello boss
