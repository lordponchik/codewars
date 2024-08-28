/*6 kyu №88
Write Number in Expanded Form
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

STRINGSMATHEMATICSALGORITHMSFUNDAMENTALS
*/
function expandedForm(num) {
  // Your code here
  const arr = num.toString().split('');
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    let nullValue = '0'.repeat(arr.length - (i + 1));

    if (arr[i] === '0') continue;

    if (nullValue.length === arr.length) {
      nullValue = '';
    }

    result.push(`${arr[i]}${nullValue}`);
  }

  return result.join(' + ');
}

console.log(expandedForm(12)); // 10 + 2
console.log(expandedForm(70304)); // '70000 + 300 + 4'
