/*
7 kyu 22

A Letter's Best Friend
Task
Given a string, return if all occurrences of a given letter are always immediately followed by the other given letter.

Worked Example
("he headed to the store", "h", "e") ➞ True

# All occurences of "h": ["he", "headed", "the"]
# All occurences of "h" have an "e" after it.
# Return True

('abcdee', 'e', 'e') ➞ False

# For first "e" we can get "ee"
# For second "e" we cannot have "ee"
# Return False
Examples
("i found an ounce with my hound", "o", "u") ➞ True

("we found your dynamite", "d", "y") ➞ False
Notes
All sentences will be given in lowercase.
FundamentalsStrings
*/

export function bestFriend(txt: string, a: string, b: string): boolean {
  return [...txt].every((el, i, arr) => {
    if (el === a) return arr[i + 1] === b;
    return true;
  });
}

console.log(bestFriend('he headed to the store', 'h', 'e')); // true
console.log(bestFriend('we found your dynamite', 'd', 'y')); // false

console.log(bestFriend('i found an ounce with my hound', 'o', 'u')); // true
console.log(bestFriend('abcdee', 'e', 'e')); // false
