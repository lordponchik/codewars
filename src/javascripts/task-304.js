/*
8 kyu 304
Ordered Count of Characters
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
FUNDAMENTALS
*/
const orderedCount = function (text) {
  // Implement me!
  const set = new Set(text);

  return [...set].map(el => {
    const value = [...text].reduce((sum, e) => {
      if (e === el) return (sum += 1);
      return (sum += 0);
    }, 0);

    return [el, value];
  });
};

console.log(orderedCount('abracadabra')); //[['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]]
