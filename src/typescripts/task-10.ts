/*
7 kyu 10
Evens and Odds
This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.

*/

export function evensAndOdds(n: number): string {
  return n % 2 === 0 ? n.toString(2) : n.toString(16).toLowerCase();
}

console.log(evensAndOdds(2)); // "10"
console.log(evensAndOdds(47)); // "2f"
