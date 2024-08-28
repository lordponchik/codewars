/*5 kyu №36
Moving Zeros To The End
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  const arrNull = [];

  const newArr = arr.filter(el => {
    if (el === 0) {
      arrNull.push(el);
    }

    return el !== 0;
  });

  newArr.push(...arrNull);

  return newArr;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])); // [false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
