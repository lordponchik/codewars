/*
8 kyu 320
Divide and Conquer
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.

FUNDAMENTALSSTRINGSARRAYS
*/
function divCon(x) {
  return x.reduce((total, el) => {
    if (typeof el === 'number') return (total += el);
    if (typeof el === 'string') return (total -= Number(el));
  }, 0);
}

console.log(divCon([9, 3, '7', '3'])); //2
