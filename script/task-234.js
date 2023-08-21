/*6 kyu №234
Which are in?
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.
ARRAYSLISTSSTRINGSREFACTORING
*/
function inArray(array1, array2) {
  //...
  let arr = [];

  for (let i = 0; i < array1.length; i += 1) {
    if (array2.some(e => e.includes(array1[i]))) {
      arr.push(array1[i]);
    }
  }
  return arr.sort((a, b) => a.localeCompare(b));
}

console.log(inArray(['arp', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong'])); //["arp", "live", "strong"]
console.log(inArray(['tarp', 'mice', 'bull'], ['lively', 'alive', 'harp', 'sharp', 'armstrong'])); // []
