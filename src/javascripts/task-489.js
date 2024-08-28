/*
7 kyu 489
How many arguments
Write a function that returns the number of arguments it received.

args_count() --> 0
args_count('a') --> 1
args_count('a', 'b') --> 2

// Create a function called args_count that returns the number of arguments provided
FUNDAMENTALS
*/

function args_count(...args) {
  return args.length;
}

console.log(args_count('a', 'b'));
