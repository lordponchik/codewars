/*
7 kyu 490
How many arguments
Find min and max
Implement a function that returns the minimal and the maximal value of a list (in this order).

FUNDAMENTALS
*/

function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
