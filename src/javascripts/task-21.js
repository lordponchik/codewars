/*6 kyu №21
Who likes it?
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that 
like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.




*/

function likes(names) {
  // TODO
  const endStr = names.length > 1 ? 'like this' : 'likes this';
  if (names.length === 0) return `no one ${endStr}`;
  if (names.length === 1) return `${names[0]} ${endStr}`;
  if (names.length === 2) return `${names.join(' and ')} ${endStr}`;
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} ${endStr}`;
  if (names.length > 3) return `${names[0]}, ${names[1]} and ${names.length - 2} others ${endStr}`;
}

console.log(likes([])); // no one likes this
console.log(likes(['Peter'])); //"Peter likes this"
console.log(likes(['Jacob', 'Alex'])); //"Jacob and Alex like this"
console.log(likes(['Max', 'John', 'Mark'])); //"Max, John and Mark like this"
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // Alex, Jacob and 2 others like this
