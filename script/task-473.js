/*
6 kyu 473
Next Version
You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.

Exercice
Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.

For example:

Current           ->  Next version
"1.2.3"           ->  "1.2.4"
"0.9.9"           ->  "1.0.0"
"1"               ->  "2"
"1.2.3.4.5.6.7.8" ->  "1.2.3.4.5.6.7.9"
"9.9"             ->  "10.0"
Rules
All numbers, except the first one, must be lower than 10: if there are, you have to set them to 0 and increment the next number in sequence.

You can assume all tests inputs to be valid.

ARRAYSSTRINGSALGORITHMS
*/

function nextVersion(version) {
  //TODO : find the next version
  if (version.length === 1) return (Number(version) + 1).toString();

  return version
    .split('.')
    .reverse()
    .map(el => Number(el))
    .reduce(
      (ar, el, i, array) => {
        if (i === 0) {
          if (el === 9) {
            ar[0].push(0);
            ar[1] = 1;
            return ar;
          }
          ar[0].push(el + 1);
          ar[1] = 0;
          return ar;
        }

        if (ar[1] === 1) {
          if (el === 9) {
            i === array.length - 1 ? ar[0].push(10) : ar[0].push(0);
            return ar;
          }
          i === array.length - 1 ? ar[0].push(el + 1) : ar[0].push(el);
          ar[1] = 0;
          return ar;
        }
        ar[0].push(el);
        return ar;
      },
      [[], 0]
    )[0]
    .reverse()
    .join('.');
}

console.log(nextVersion('1')); // "2"
console.log(nextVersion('1.2.3')); // "1.2.4"
console.log(nextVersion('1.2.3.4.5.6.7.8')); // "1.2.3.4.5.6.7.9"
console.log(nextVersion('9.9')); // "10.0"
console.log(nextVersion('0.9.9')); // "1.0.0"
