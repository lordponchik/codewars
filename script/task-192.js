/*8 kyu №192
Reversing Words in a String
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!

FUNDAMENTALSSTRINGS
*/

function reverse(string) {
  //your code here
  return string.split(' ').reverse().join(' ');
}

console.log(reverse('Hi There.')); // "There. Hi"
