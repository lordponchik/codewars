/*
8 kyu №252
8 kyu
Array plus array
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

FUNDAMENTALSARRAYSDEBUGGING

function arrayPlusArray(arr1, arr2) {
  return arr1 + arr2; //something went wrong
}
*/

function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((sum, el) => {
    return (sum += el);
  }, 0); //something went wrong
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21
