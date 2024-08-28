/*8 kyu №74
Thinkful - Logic Drills: Traffic light
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.

FUNDAMENTALS
*/

function updateLight(current) {
  //your code here!

  const trafficLight = ['green', 'yellow', 'red'];
  const step = trafficLight[trafficLight.indexOf(current) + 1];

  return step === undefined ? trafficLight[0] : trafficLight[[trafficLight.indexOf(current) + 1]];
}

console.log(updateLight('green')); //  "yellow"
console.log(updateLight('yellow')); // "red"
console.log(updateLight('red')); // "green"
