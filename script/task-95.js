/*8 kyu №95

Third Angle of a Triangle
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle

FUNDAMENTALS
*/
function otherAngle(a, b) {
  return 180 - a - b;
}

console.log(otherAngle(30, 60)); //90
