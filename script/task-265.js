/*
8 kyu №265
Unfinished Loop - Bug Fixing #1
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

DEBUGGING

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number;){
    newArray.push(counter);
  }
  
  return newArray;
}
*/

// write the function isAnagram

function createArray(number) {
  let newArray = [];

  for (let counter = 1; counter <= number; counter += 1) {
    newArray.push(counter);
  }

  return newArray;
}

console.log(createArray(3)); //[1,2,3]
