/*
8 kyu 479
Ensure question
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"
FUNDAMENTALS

*/
function ensureQuestion(s) {
  // Code here
  return s[s.length - 1] === '?' ? s : `${s}?`;
}
