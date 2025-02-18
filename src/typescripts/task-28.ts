/*
6 kyu 27
String transformer
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

Fundamentals
*/

export function stringTransformer(str: string) {
  return [...str]
    .reduce<string[]>((new_arr, el, i) => {
      if (el !== ' ') {
        if (new_arr[new_arr.length - 1] === ' ' || i === 0) {
          new_arr.push(el);
          return new_arr;
        }
        new_arr[new_arr.length - 1] += el;
        return new_arr;
      }
      new_arr.push(el);
      return new_arr;
    }, [])
    .reverse()
    .map(el => {
      if (el === ' ') return el;
      return [...el].map(x => (x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase())).join('');
    })
    .join('');
}

console.log(stringTransformer('Example Input')); // "iNPUT eXAMPLE"
console.log(stringTransformer('You Know When  THAT  Hotline Bling')); // 'bLING hOTLINE  that  wHEN kNOW yOU'
console.log(stringTransformer('To be OR not to be That is the Question')); // 'qUESTION THE IS tHAT BE TO NOT or BE tO'
