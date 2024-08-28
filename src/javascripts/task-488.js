/*
7 kyu 488
7 kyu
Insert dashes
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num.
 For example: if num is 454793 the output should be 4547-9-3.

Note that the number will always be non-negative (>= 0).

STRINGSARRAYSFUNDAMENTALS
*/

function insertDash(num) {
  //code me
  return [...num.toString()]
    .map(el => Number(el))
    .reduce((arr, el, i) => {
      if (el % 2 !== 0 && arr[i - 1] % 2 !== 0 && i !== 0) {
        arr.push(el * -1);
        return arr;
      }
      arr.push(el);
      return arr;
    }, [])
    .join('');
}

console.log(insertDash(454793)); //4547-9-3
