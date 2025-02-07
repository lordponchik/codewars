/*
7 kyu 17
Selective fear of numbers
I've got a crazy mental illness. I dislike numbers a lot. B
ut it's a little complicated: The number I'm afraid of depends on which day of the week it is... 
This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so 
it tells the doctor if I'm afraid or not. (return a boolean)
*/

interface daysNumbers {
  [key: string]: [number[], string];
}

export function amIAfraid(day: string, num: number): boolean {
  const daysNumbers: daysNumbers = {
    Monday: [[12], '==='],
    Tuesday: [[95], 'numbers greater than'],
    Wednesday: [[34], '==='],
    Thursday: [[0], '==='],
    Friday: [[2], 'numbers divisible by'],
    Saturday: [[56], '==='],
    Sunday: [[666, -666], '==='],
  };

  switch (daysNumbers[day][1]) {
    case '===':
      return daysNumbers[day][0].some(el => el === num);
    case 'numbers greater than':
      return num > daysNumbers[day][0][0];
    case 'numbers divisible by':
      return num % daysNumbers[day][0][0] === 0;

    default:
      return false;
  }
}

console.log(amIAfraid('Monday', 13)); // false
console.log(amIAfraid('Tuesday', 2)); // false
console.log(amIAfraid('Tuesday', 965)); // true
console.log(amIAfraid('Wednesday', 34)); // true
console.log(amIAfraid('Thursday', 0)); // true
console.log(amIAfraid('Friday', 2)); // true
console.log(amIAfraid('Saturday', 56)); // true
console.log(amIAfraid('Sunday', 666)); // true
