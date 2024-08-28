/*
 7 kyu 450

 Remove anchor from URL
 Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
REGULAR EXPRESSIONSSTRINGSFUNDAMENTALS
*/

function removeUrlAnchor(url) {
  return url.includes('#') ? url.slice(0, url.indexOf('#')) : url;
}

console.log(removeUrlAnchor('www.codewars.com/katas/?page=1'));
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));
