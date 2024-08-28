/*
8 kyu 330
Geometry Basics: Distance between points in 2D
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have attributes x and y.

Write a function calculating distance between Point a and Point b.

Input coordinates fit in range 
−50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.

GEOMETRYFUNDAMENTALS
*/
function distanceBetweenPoints(a, b) {
  class Point {
    constructor(x, y) {
      (this.x = x), (this.y = y);
    }
  }

  return Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2); // your code here
}

console.log(distanceBetweenPoints(new Point(3, 3), new Point(3, 3))); //0
console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2))); //5
