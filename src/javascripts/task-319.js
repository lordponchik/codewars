/*
8 kyu 319
Sum of Odd Cubed Numbers
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

FUNDAMENTALSFUNCTIONAL PROGRAMMINGARRAYS
*/
function cubeOdd(arr) {
  // insert code here >.<

  return arr.some(el => isNaN(el))
    ? undefined
    : arr.reduce((total, el) => {
        if (el ** 3 % 2 !== 0) return (total += el ** 3);
        return (total += 0);
      }, 0);
}

console.log(cubeOdd([1, 2, 3, 4])); //28   1 + !8 + 27 + !64
console.log(cubeOdd([-3, -2, 2, 3])); // 0
console.log(cubeOdd(['a', 12, 9, 'z', 42])); // undefined
