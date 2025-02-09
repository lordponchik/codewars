/*
7 kyu 19
Sort the Vowels!
Sort the Vowels!
In this kata, we want to sort the vowels in a special format.

Task
Write a function which takes a input string s and return a string in the following way:

   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|

Notes:

List all the Vowels on the right side of |
List every character except Vowels on the left side of |
for the purpose of this kata, the vowels are : a e i o u
Return every character in its original case
Each line is seperated with \n
Invalid input ( undefined / null / integer ) should return an empty string
FundamentalsAlgorithmsStrings
*/

export function sortVowels(str?: number | string | null): string {
  const vowels_arr: string[] = ['a', 'e', 'i', 'o', 'u'];

  if (typeof str !== 'string') return '';

  return [...str]
    .map(el => {
      return vowels_arr.includes(el.toLowerCase()) ? `|${el}` : `${el}|`;
    })
    .join('\n');
}

console.log(sortVowels('Codewars')); // 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
console.log(sortVowels('Is RubY dEad?')); // '|I\ns|\n |\nR|\n|u\nb|\nY|\n |\nd|\n|E\n|a\nd|\n?|'
console.log(sortVowels('LOrEm IpsUm dOlOr sIt AmEt')); //'L|\n|O\nr|\n|E\nm|\n |\n|I\np|\ns|\n|U\nm|\n |\nd|\n|O\nl|\n|O\nr|\n |\ns|\n|I\nt|\n |\n|A\nm|\n|E\nt|'
