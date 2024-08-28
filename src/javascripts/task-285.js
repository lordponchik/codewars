/*
8 kyu 285
Regular Ball Super Ball
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
FUNDAMENTALS

*/
// var Ball = function (ballType = 'regular') {
//   // your code goes here

//   return;
// };

class Ball {
  constructor(ballType = 'regular') {
    this.ballType = ballType;
  }
}

const b1 = new Ball();
const b2 = new Ball('super');

console.log(b1.ballType);
console.log(b2.ballType);
