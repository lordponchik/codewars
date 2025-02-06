/*
7 kyu 14
Tail Swap
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
Fundamentals
*/

export function tailSwap(arr: [string, string]): [string, string] {
  // your code here
  const [str_0_0, str_0_1] = arr[0].split(':');
  const [str_1_0, str_1_1] = arr[1].split(':');

  return [`${str_0_0}:${str_1_1}`, `${str_1_0}:${str_0_1}`];
}

console.log(tailSwap(['abc:123', 'cde:456'])); // ['abc:456', 'cde:123']
console.log(tailSwap(['a:12345', '777:xyz'])); // ['a:xyz', '777:12345']
