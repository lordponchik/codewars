/*6 kyu №120

Unique In Order
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
ALGORITHMSFUNDAMENTALS
*/

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  if (typeof iterable === 'object') return iterable.filter((el, i, arr) => el !== arr[i - 1]);
  if (typeof iterable === 'string')
    return iterable.split('').filter((el, i, arr) => el !== arr[i - 1]);
  if (typeof iterable === 'number')
    return iterable
      .toString()
      .split('')
      .map(el => Number(el))
      .filter((el, i, arr) => el !== arr[i - 1]);
};

console.log(uniqueInOrder('AAAABBBCCDAABBB')); //['A','B','C','D','A','B']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1,2,3]
