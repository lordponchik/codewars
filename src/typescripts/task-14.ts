/*
7 kyu 14
Correct the time-string
A new task for you!

You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  
If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

ParsingStringsFundamentals
*/

export function timeCorrect(timestring: string | null): string | null {
  if (timestring === '') return '';
  if (timestring === null || !timestring.includes(':')) return null;

  const arrTimes = timestring.split(':').map(el => Number(el));

  if (arrTimes.some(isNaN)) return null;
  if (arrTimes.length !== 3) return null;

  let [hours, minutes, seconds] = arrTimes;

  minutes += Math.floor(seconds / 60);
  seconds %= 60;

  hours += Math.floor(minutes / 60);
  minutes %= 60;

  hours %= 24;

  return [hours, minutes, seconds].map(el => String(el).padStart(2, '0')).join(':');
}

console.log(timeCorrect(null)); // null
console.log(timeCorrect('')); // null

console.log(timeCorrect('001122')); // null
console.log(timeCorrect('00;11;22')); // null
console.log(timeCorrect('0a:1c:22')); // null

console.log(timeCorrect('09:10:01')); // "09:10:01"
console.log(timeCorrect('11:70:10')); // "12:10:10"
console.log(timeCorrect('19:99:09')); // "20:39:09"
console.log(timeCorrect('19:99:99')); // "20:40:39"
console.log(timeCorrect('24:01:01')); // "00:01:01"
console.log(timeCorrect('52:01:01')); // "04:01:01"
