/*6 kyu №156
Multiplication table
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

const multiplicationTable = function (size) {
  // insert code here
  const arr = [];
  let step = 1;

  for (let i = 0; i < size; i += 1) {
    arr.push([]);

    for (let j = 1; j <= size; j += 1) {
      arr[i].push(j * step);
    }

    step += 1;
  }

  return arr;
};
console.log(multiplicationTable(3)); // [[1,2,3], [2,4,6], [3,6,9]]
