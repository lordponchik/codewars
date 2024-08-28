/*
7 kyu 389
Functional Addition
Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6
FUNCTIONAL PROGRAMMINGFUNDAMENTALS
*/
function add(n) {
  return m => {
    return n + m;
  };
}

console.log(add(3)(4)); // 7
