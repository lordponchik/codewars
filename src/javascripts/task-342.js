/*
7 kyu 342
esreveR
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)

FUNCTIONAL PROGRAMMINGFUNDAMENTALS
*/
const reverse = function (array) {
  // TODO: program me!
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    newArray.unshift(array[i]);
  }

  return newArray;
};

console.log(reverse([1, 2, 3])); //[3,2,1]
