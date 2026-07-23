/*
7 kyu 494
Running out of space
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

Fundamentals
*/

function spacey(array) {
  let new_array = [...array];
  let s = "";

  for(let i=0; i<new_array.length; i++){
    s += new_array[i];
    new_array[i] = s;
  }

  return new_array;
}

console.log(spacey(['i', 'have','no','space'])); // ['i','ihave','ihaveno','ihavenospace']

