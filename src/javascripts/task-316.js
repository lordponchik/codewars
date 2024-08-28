/*
8 kyu 316
Color Ghost
Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
OBJECT-ORIENTED PROGRAMMINGFUNDAMENTALS

var Ghost = function() {
  // your code goes here
};
*/
class Ghost {
  constructor() {
    this.color = this.createColor();
  }
  createColor() {
    const colors = ['white', 'yellow', 'purple', 'red'];
    const randomValue = Math.floor(Math.random() * colors.length);

    return colors[randomValue];
  }
}

const ghost = new Ghost();

console.log(ghost.color); // "...colors"
