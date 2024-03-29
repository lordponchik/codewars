/*8 kyu №237
Fix your code before the garden dies!
You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!

FUNDAMENTALSDEBUGGING

function rainAmount(mm){
    if (rainAmount = 40) {
         return "You need to give your plant " + {rainAmount - 40} + " mm of water"
    };
    if else {
         return "Your plant has had more than enough water for today!"
    };
}

*/
function rainAmount(mm) {
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`;
  } else {
    return 'Your plant has had more than enough water for today!';
  }
}

console.log(rainAmount(39)); //`You need to give your plant 1mm of water`
console.log(rainAmount(50)); // 'Your plant has had more than enough water for today!'
