/*
8 kyu 412
8 kyu
String Templates - Bug Fixing #5
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!


STRINGSDEBUGGING
*/
function tripleTrouble(one, two, three) {
  //Solution
  return [...one].map((el, i) => el + two[i] + three[i]).join('');
}

console.log('aaa', 'bbb', 'ccc'); // "abcabcabc"
