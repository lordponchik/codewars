/*8 kyu №112

Exclamation marks series #1: Remove an exclamation mark from the end of string
Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
FUNDAMENTALSSTRINGS

*/
function remove(string) {
  //coding and coding....

  return string.endsWith('!') ? string.slice(0, string.length - 1) : string;
}

console.log(remove('Hi! Hi!!')); // "HI! HI!"
