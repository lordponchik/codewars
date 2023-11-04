/*
8 kyu 340
8 kyu
Power
The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.

RESTRICTED
*/
function numberToPower(number, power) {
  if (power === 0) return 1;
  if (power === 1) return number;

  let pow = number;
  for (let i = 1; i < power; i += 1) {
    pow *= number;
  }

  return pow;
}

console.log(numberToPower(4, 2)); //16
console.log(numberToPower(10, 4)); // 10000
console.log(numberToPower(10, 0)); // 1
