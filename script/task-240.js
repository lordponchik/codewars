/*7 kyu №240
Check the exam
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
FUNDAMENTALSARRAYS
*/
function checkExam(array1, array2) {
  // good luck
  const sum = array1
    .map((el, i) => {
      if (el === array2[i]) return 4;
      if (array2[i].length === 0) return 0;
      return -1;
    })
    .reduce((sum, el) => {
      return (sum += el);
    }, 0);

  return sum <= 0 ? 0 : sum;
}

console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd'])); // 6
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c'])); // 0
