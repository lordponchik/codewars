/*
7 kyu 21

Two numbers are positive
Task:
Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of the three integers are positive numbers (greater than zero), and False - otherwise.

Examples:
two_are_positive(2, 4, -3) == True
two_are_positive(-4, 6, 8) == True
two_are_positive(4, -6, 9) == True
two_are_positive(-4, 6, 0) == False
two_are_positive(4, 6, 10) == False
two_are_positive(-14, -3, -4) == False
Fundamentals
*/

export function twoArePositive(a: number, b: number, c: number): boolean {
  return [a, b, c].filter(el => el > 0).length === 2;
}
