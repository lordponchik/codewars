/*8 kyu №71
If you can't sleep, just count sheep!!
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num) {
  //your code here
  let step = 0;
  let str = ``;

  while (step < num) {
    str += `${++step} sheep...`;
  }

  return str;
};

console.log(countSheep(5)); //  "1 sheep...2 sheep..."
