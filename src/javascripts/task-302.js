/*
8 kyu 302
ASCII Total
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291
FUNDAMENTALS
*/
function uniTotal(string) {
  // total up dem unicodes!
  return [...string].reduce((total, el) => {
    return (total += el.charCodeAt());
  }, 0);
}

console.log(uniTotal('Mary Had A Little Lamb')); //1873
