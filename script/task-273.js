/*
8 kyu №273
Grasshopper - Terminal game combat function
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

FUNDAMENTALS
*/

// write the function isAnagram

function combat(health, damage) {
  // Write your code here
  return health - damage < 0 ? 0 : health - damage;
}

console.log(combat(5, 3)); //12
