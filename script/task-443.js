/*
8 kyu 443

Smallest unused ID
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!

FUNDAMENTALSALGORITHMS

*/

function nextId(ids) {
  const sortIDS = [...ids].sort((a, b) => a - b);

  for (let i = 0; i < sortIDS.length; i += 1) {
    if (i !== sortIDS[i] && !sortIDS.includes(i)) return i;
  }

  return sortIDS.length;
}

console.log(nextId([0, 1, 3])); //2
console.log(nextId([0, 1, 2, 3])); // 4
