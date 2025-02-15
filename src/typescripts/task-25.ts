/*
7 kyu 25
Suzuki needs help lining up his students!
Suzuki needs help lining up his students!

Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.

You will be given a string of student names. Sort them and return a list of names in descending order.

Here is an example input:

string = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'
Here is an example return from your function:

 lst = ['Takehiko',
        'Takayuki',
        'Takahiro',
        'Takeshi',
        'Takeshi',
        'Takashi',
        'Tadashi',
        'Takeo',
        'Takao']
Names of equal length will be returned in reverse alphabetical order (Z->A) such that:

string = "xxa xxb xxc xxd xa xb xc xd"
Returns

['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa']

StringsSortingFundamentals
*/

export function lineupStudents(students: string): string[] {
  const num_letters = students
    .split(' ')
    .map(el => el.length)
    .filter((el, i, arr) => i === arr.indexOf(el))
    .sort((a, b) => b - a);

  const arr: string[][] = new Array(num_letters.length).fill(null).map(() => []);

  return students
    .split(' ')
    .reduce((new_arr, el) => {
      new_arr[num_letters.indexOf(el.length)].push(el);

      return new_arr;
    }, arr)
    .map(el => el.sort((a, b) => b.localeCompare(a)))
    .flat();
}

console.log(
  lineupStudents('Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi')
); // ['Takehiko', 'Takayuki','Takahiro','Takeshi','Takeshi','Takashi','Tadashi','Takeo','Takao']
console.log(lineupStudents('xxa xxb xxc xxd xa xb xc xd')); // ['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa']
console.log(lineupStudents('xxa xxb xx')); // ['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa']
