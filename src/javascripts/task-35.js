/*7 kyu №35
Day of the Year
Work out what number day of the year it is.

toDayOfYear([1, 1, 2000]) => 1
The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

The year can be evenly divided by 4;
If the year can be evenly divided by 100, it is NOT a leap year, unless;
The year is also evenly divisible by 400. Then it is a leap year.
FUNDAMENTALS
*/

function toDayOfYear(arr) {
  // return a number
  let total = arr[0];

  for (let i = 1; i < arr[1]; i += 1) {
    total += toDayOfMonat(i);

    if (i === 2) {
      if (arr[2] % 4 === 0) {
        total += 1;
      }
      if (arr[2] % 100 === 0 && arr[2] % 400 !== 0) {
        total -= 1;
      }
    }
  }

  return total;
}
function toDayOfMonat(monat) {
  switch (monat) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;
  }
}

console.log(toDayOfYear([5, 11, 1604])); // 310
console.log(toDayOfYear([1, 5, 3000])); // 121
console.log(toDayOfYear([19, 1, 2624])); //19
