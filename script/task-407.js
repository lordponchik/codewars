/*
7 kyu 407
Cut array into smaller parts
DESCRIPTION:
Write function makeParts or make_parts (depending on your language) that will take an array as argument and the size of the chunk.

Example: if an array of size 123 is given and chunk size is 10 there will be 13 parts, 12 of size 10 and 1 of size 3.
*/
function makeParts(arr, chunkSize) {
  const partsArr = [];
  let step = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (step.length <= chunkSize || i === arr.length - 1) {
      step.push(arr[i]);
    }
    if (step.length === chunkSize || i === arr.length - 1) {
      partsArr.push(step);
      step = [];
    }
  }

  return partsArr;
}

console.log(makeParts([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
