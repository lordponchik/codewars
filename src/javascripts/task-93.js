/*6 kyu №93
Count characters in your string
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

STRINGSFUNDAMENTALS
*/
function count(string) {
  // TODO

  const obj = {};
  let key = Object.keys(obj);

  if (string.length === 0) return obj;

  string.split('').map(el => {
    key = Object.keys(obj);
    if (key.includes(el)) {
      obj[el] += 1;
    } else {
      obj[el] = 1;
    }
  });

  return obj;
}

console.log(count('aba')); // {'a': 2, 'b': 1}
