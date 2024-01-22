/*
7 kyu 402

Numbers to Letters
Given an array of numbers (in string format), you must return a string.
The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. 
You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.

FUNDAMENTALSSTRINGSARRAYS
*/
function switcher(x) {
  const arr_en = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const arrNumToStr = arr_en.reverse().concat(['!', '?', ' ']);

  return [...x].map(el => arrNumToStr[Number(el) - 1]).join('');
}

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // codewars
