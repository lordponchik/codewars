/*8 kyu №217
The 'if' function
Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.

Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
FUNCTIONAL PROGRAMMINGFUNDAMENTALS
*/
function _if(bool, func1, func2) {
  // ...
  if (bool) return func1();

  return func2();
}

function func1() {
  console.log('true');
}
function func2() {
  console.log('false');
}

console.log(_if(true, func1, func2)); // "function unexpectedly called"
