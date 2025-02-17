/*
6 kyu 27
Dashatize it
Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:

274 -> '2-7-4'
6815 -> '68-1-5'
StringsArraysRegular ExpressionsFundamentals
*/

export function dashatize(num: number): string {
  if (num < 0) num = num * -1;
  if (num.toString().length === 1) return num.toString();

  return [...num.toString()]
    .map(el => {
      return Number(el);
    })
    .map((el, i, arr) => {
      if (i === 0) return el % 2 === 0 ? el : `${el}-`;
      if (arr.length - 1 === i) return el % 2 === 0 ? el : `-${el}`;

      return el % 2 === 0 ? el : `-${el}-`;
    })
    .join('')
    .replaceAll('--', '-');
}

console.log(dashatize(274)); //'2-7-4';
console.log(dashatize(6815)); //"68-1-5"
