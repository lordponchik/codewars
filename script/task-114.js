/*6 kyu №114

Build Tower
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Go challenge Build Tower Advanced once you have finished this :)

STRINGSASCII ARTFUNDAMENTALS

*/

function towerBuilder(nFloors) {
  // build here
  const arr = [];
  const star = '*';
  let quantityStars = 1;

  for (let i = 1; i <= nFloors; i += 1) {
    const str = ' '.repeat(nFloors - i) + star.repeat(quantityStars) + ' '.repeat(nFloors - i);

    arr.push(str);

    quantityStars += 2;
  }

  return arr;
}

console.log(towerBuilder(6)); // "*"
