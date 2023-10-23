/*
6 kyu 311
Kebabize
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters
FUNDAMENTALSSTRINGSREGULAR EXPRESSIONS
*/

function kebabize(str) {
  // TODO
  return [...str]
    .filter(el => isNaN(el))
    .map((el, i) => {
      if (el === el.toUpperCase() && i !== 0) return `-${el}`;
      return el;
    })
    .join('')
    .toLowerCase();
}

console.log(kebabize('MyCamelCasedString')); //'my-camel-cased-string'
console.log(kebabize('MyCamelHas3Humps')); //'my-camel-has-humps'
