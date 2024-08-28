/*8 kyu №51
Grasshopper - Grade book
Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

FUNDAMENTALS
*/

function getGrade(s1, s2, s3) {
  // Code here
  const averageScore = (s1 + s2 + s3) / 3;

  if (averageScore >= 0 && averageScore < 60) return 'F';
  if (averageScore >= 60 && averageScore < 70) return 'D';
  if (averageScore >= 70 && averageScore < 80) return 'C';
  if (averageScore >= 80 && averageScore < 90) return 'B';
  if (averageScore >= 90 && averageScore <= 100) return 'A';
}

console.log(getGrade(95, 90, 93)); // "A"
