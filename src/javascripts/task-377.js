/*
7 kyu 377

Sort and Star
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

FUNDAMENTALSSTRINGSARRAYSSORTING
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    new Date(currentDate).getTime() <= new Date(expirationDate).getTime()
  );
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'));
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'));
