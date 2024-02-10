/*
7 kyu 422
Remove duplicate words
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

STRINGSREGULAR EXPRESSIONSALGORITHMS
*/
function removeDuplicateWords(s) {
  // your perfect code...
  // return [...new Set(s.split(' '))].join(' ');
  const arr = [];

  s.split(' ').forEach(el => {
    if (!arr.includes(el)) {
      arr.push(el);
    }
  });

  return arr.join(' ');
}

console.log(
  removeDuplicateWords(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  )
); // 'alpha beta gamma delta'
