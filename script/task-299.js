/*
8 kyu 299
Switcheroo
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

FUNDAMENTALSSTRINGS
*/
function switcheroo(x) {
  return x
    .split('')
    .map(el => {
      if (el === 'a') return 'b';
      if (el === 'b') return 'a';
      return el;
    })
    .join('');
}

console.log(switcheroo('aabacbaa')); //"bbabcabb"
