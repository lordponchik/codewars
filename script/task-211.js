/*8 kyu №211
Lario and Muigi Pipe Problem
Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

The pipes are correct when each pipe after the first is 1 more than the previous one.

Task
Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

LISTSFUNDAMENTALS
*/
function pipeFix(numbers) {
  for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i + 1] - numbers[i] > 1) {
      numbers.splice(i + 1, 0, numbers[i] + 1);
      console.log('hier');
    }
  }

  return numbers;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])); // [1,2,3,5,6,8,9]
console.log(pipeFix([-1, 4])); // [1,2,3,5,6,8,9]
