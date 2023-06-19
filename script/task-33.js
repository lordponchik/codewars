/*8 kyu №33
Name Shuffler
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/

function nameShuffler(str) {
  //Shuffle It
  return str.split(' ').reverse().join(' ');
}

console.log(nameShuffler('john McClane')); // McClane john
