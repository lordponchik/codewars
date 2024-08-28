/*
5 kyu 467
Extract the domain name from a URL
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
PARSINGREGULAR EXPRESSIONS
*/

function domainName(url) {
  //your code here
  const arrUrl = url.replaceAll('.', '/').split('/');

  if (url.includes('http') && url.includes('www')) return arrUrl[3];
  if (url.includes('www')) return arrUrl[1];
  if (url.includes('http')) return arrUrl[2];

  return arrUrl[0];
}

console.log(domainName('http://www.codewars.com/kata/')); // codewars
console.log(domainName('http://google.com')); //, 'google');
console.log(domainName('http://google.co.jp')); //, 'google');
console.log(domainName('www.xakep.ru')); // , 'xakep');
console.log(domainName('https://youtube.com')); //, 'youtube');
console.log(domainName('za2cngt88.co/users')); // za2cngt88
