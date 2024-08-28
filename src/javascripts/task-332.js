/*
6 kyu 332
Decipher this!
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
STRINGSARRAYSCIPHERSFUNDAMENTALS
*/
function decipherThis(str) {
  //have fun!

  return str
    .split(' ')
    .map(el =>
      (
        String.fromCharCode(Number.parseInt(el)) +
        el.slice(Number.parseInt(el).toString().length, el.length)
      ).length > 2
        ? String.fromCharCode(Number.parseInt(el)) +
          el.slice(el.length - 1, el.length) +
          el.slice(Number.parseInt(el).toString().length + 1, el.length - 1) +
          el.slice(Number.parseInt(el).toString().length, Number.parseInt(el).toString().length + 1)
        : String.fromCharCode(Number.parseInt(el)) +
          el.slice(Number.parseInt(el).toString().length, el.length)
    )
    .join(' ');
}

console.log(decipherThis('72olle 103doo 100ya')); //Hello good day
console.log(decipherThis('82yade 115te 103o')); //Ready set go
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')); //'Have a go at this and see how you do'
