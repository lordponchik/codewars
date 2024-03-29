/*
6 kyu 361
Make the Deadfish Swim
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
PARSINGALGORITHMS
*/
function parse(data) {
  let value = 0;
  const arr = [];

  for (let i = 0; i < data.length; i += 1) {
    switch (data[i]) {
      case 'i':
        value += 1;
        break;
      case 'd':
        value -= 1;
        break;
      case 's':
        value = value ** 2;
        break;
      case 'o':
        arr.push(value);
        break;
    }
  }

  return arr;
}

console.log(parse('iiisdoso')); //[ 8, 64 ]
