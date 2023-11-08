/*
7 kyu 344
Filter the number
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

STRINGSFUNDAMENTALS
*/
var filterString = function (value) {
  //Complete this function :)

  return !isNaN(value) ? Number(value) : +[...value].filter(el => !isNaN(el)).join('');
};

console.log(filterString('123asd')); //123
