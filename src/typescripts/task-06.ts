/*
7 kyu 6
JavaScript Array Filter
The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
ArraysFundamentals
*/

export const getEvenNumbers = (numbersArray: number[]): number[] => {
  // filter out the odd numbers
  return numbersArray.filter(el => el % 2 === 0);
};

console.log(getEvenNumbers([2, 4, 5, 6])); // [2,4,6]
