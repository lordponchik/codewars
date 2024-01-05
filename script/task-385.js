/*
7 kyu 385
Sum of integers in string
Your task in this kata is to implement a function that calculates the sum of the
integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", 
the sum of the integers is 3635.

Note: only positive integers will be tested.

FUNDAMENTALS

*/

function sumOfIntegersInString(s) {
  return [...s]
    .map(el => {
      if (el === ' ') return '-';
      if (!isNaN(el)) return Number(el);
      return '-';
    })
    .join('')
    .split('-')
    .reduce((sum, el) => {
      return (sum += Number(el));
    }, 0);
}

console.log(sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog')); //3635
console.log(sumOfIntegersInString('The Great Depression lasted from 1929 to 1939.')); //3868
