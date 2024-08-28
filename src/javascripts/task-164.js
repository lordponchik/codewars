/*8 kyu №164

Multiple of index
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
FUNDAMENTALSARRAYS
*/

function multipleOfIndex(array) {
  // good luck

  return array.filter((el, i, arr) => {
    return el % i === 0 || (arr[0] === i && el === 0);
  });
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])); // [-6, 32, 25]
console.log(multipleOfIndex([0, 2, 3, 6, 9])); //[0, 2, 6]
