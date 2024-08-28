/*
7 kyu 391
Squares sequence
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
MATHEMATICSFUNDAMENTALS
*/
function squares(x, n) {
  const squaresArr = [];

  for (let i = 0; i < n; i += 1) {
    squaresArr.push(squaresArr.length === 0 ? x : squaresArr[i - 1] ** 2);
  }

  return squaresArr;
}
