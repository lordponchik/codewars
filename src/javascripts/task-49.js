/*7 kyu №49
Two to One
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
FUNDAMENTALS
*/

function longest(s1, s2) {
  // your code

  const arr = new Set([...s1, ...s2]);

  return [...arr].sort().join('');
}

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')); // "abcdefklmopqwxy"
