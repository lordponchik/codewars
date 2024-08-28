/*
8 kyu 387
Logical calculator
Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).

ARRAYSFUNDAMENTALS
*/
function logicalCalc(array, op) {
  //your code here

  switch (op) {
    case 'AND':
      return array.every(el => el === true);
    case 'OR':
      return array.some(el => el === true);
    case 'XOR':
      const quantityTrue = array.filter(el => el === true).length;
      return quantityTrue === 1 || quantityTrue % 2 !== 0 ? true : false;
  }
}

console.log(logicalCalc([true, true, true, true], 'AND')); // true
console.log(logicalCalc([true, false, false, false], 'AND')); // false
console.log('');
console.log(logicalCalc([true, true, true, true], 'OR')); // true
console.log(logicalCalc([false, false, false, false], 'OR')); // false
console.log('');
console.log(logicalCalc([true, true, true, true], 'XOR')); // false
console.log(logicalCalc([true, false, false, false], 'XOR')); // true
