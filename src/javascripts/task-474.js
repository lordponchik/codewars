/*
4 kyu 474
Strings Mix
Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
Note for Swift, R, PowerShell
The prefix =: is replaced by E:

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"
FUNDAMENTALSSTRINGS
*/

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

function mix(s1, s2) {
  const arr_s1 = [...s1].filter(el => arr_en.includes(el));
  const arr_s2 = [...s2].filter(el => arr_en.includes(el));

  const obj_s1 = arr_s1.reduce((obj, el) => {
    if (Object.hasOwn(obj, el)) {
      return {
        ...obj,
        [el]: obj[el] + 1,
      };
    }
    return { ...obj, [el]: 1 };
  }, {});

  const obj_s2 = arr_s2.reduce((obj, el) => {
    if (Object.hasOwn(obj, el)) {
      return {
        ...obj,
        [el]: obj[el] + 1,
      };
    }
    return { ...obj, [el]: 1 };
  }, {});

  const arr_1 = Object.entries(obj_s1)
    .filter(el => el[1] !== 1)
    .map(el => {
      el.push('str-1');
      return el;
    });
  const arr_2 = Object.entries(obj_s2)
    .filter(el => el[1] !== 1)
    .map(el => {
      el.push('str-2');
      return el;
    });

  return [...arr_1, ...arr_2]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .reduce((ar, el, i, array) => {
      if (i === array.length - 1) {
        if (array[i][0] === array[i - 1][0]) return ar;
        ar.push(el);
        return ar;
      }
      if (array[i][0] === array[i + 1][0]) {
        ar.push(
          array[i][1] > array[i + 1][1]
            ? el
            : array[i][1] < array[i + 1][1]
            ? array[i + 1]
            : [...[...el].splice(0, 2), 'str-3']
        );

        return ar;
      }

      if (i === 0) {
        ar.push(el);
        return ar;
      }

      if (!(typeof array[i - 1] === undefined)) {
        if (array[i][0] !== array[i - 1][0] && array[i][0] !== array[i + 1][0]) {
          ar.push(el);
          return ar;
        }
      }

      return ar;
    }, [])
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] === b[1]) {
        if (a[2] > b[2]) return 1;

        if (a[2] === b[2]) {
          if (b[0].localeCompare(a[0])) {
            return 1;
          }
        }

        return -1;
      }
    })
    .reduce((arr, el, i) => {
      if (el[2] === 'str-1') {
        arr.push(`1:${el[0].repeat(el[1])}`);
        return arr;
      }
      if (el[2] === 'str-2') {
        arr.push(`2:${el[0].repeat(el[1])}`);
        return arr;
      }
      if (el[2] === 'str-3') {
        arr.push(`=:${el[0].repeat(el[1])}`);
        return arr;
      }
      return arr;
    }, [])
    .join('/');
}

//-1 да
// 1 нет

//['e', 5, 'str-2'][('h', 2)][('r', 2)][('y', 2, 'str-2')];

console.log(mix('A aaaa bb c', '& aaa bbb c d')); // s1 has 4 'a', 2 'b', 1 'c' s2 has 3 'a', 3 'b', 1 'c', 1 'd' // "1:aaaa/2:bbb"
console.log(mix('Are they here', 'yes, they are here')); //"2:eeeee/2:yy/=:hh/=:rr"
console.log(mix(' In many languages', " there's a pair of functions")); //"1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt"
console.log(mix('looping is fun but dangerous', 'less dangerous than coding')); //"1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg"
// return arr_string.reduce((ar, el, i, arr) => {
//   if (i === arr.length - 1) {
//     if (arr[i][0] === arr[i - 1][0]) return ar;
//     ar.push(el[0].repeat(arr[i][1]));
//     return ar;
//   }
//   if (arr[i][0] === arr[i + 1][0]) {
//     ar.push(`${el[0].repeat(arr[i][1] >= arr[i + 1][1] ? arr[i][1] : arr[i + 1][1])}`);
//     return ar;
//   }
//   return ar;
// }, []);
