/*7 kyu №230
Find the vowels
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
FUNDAMENTALS
*/
function vowelIndices(word) {
  //your code here
  const vowelArr = ['a', 'e', 'i', 'o', 'u', 'y'];

  return word
    .split('')
    .map((e, i) => {
      if (vowelArr.includes(e.toLowerCase())) return i + 1;
      return e;
    })
    .filter(e => typeof e !== 'string');
}

console.log(vowelIndices('YoMama')); //[1,2,4,6]
