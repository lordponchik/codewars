/*
4 kyu 428
Human readable duration format
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

STRINGSDATE TIMEALGORITHMS
*/

function formatDuration(seconds) {
  // Complete this function
  if (seconds === 0) return 'now';

  const arr = [];

  while (seconds > 0) {
    if (Math.trunc(seconds / 31536000) > 0) {
      const years = Math.trunc(seconds / 31536000);
      arr.push(`${years} ${years > 1 ? 'years' : 'year'}`);
      seconds -= years * 31536000;
    } else if (Math.trunc(seconds / 86400) > 0) {
      const days = Math.trunc(seconds / 86400);
      arr.push(`${days} ${days > 1 ? 'days' : 'day'}`);
      seconds -= days * 86400;
    } else if (Math.trunc(seconds / 3600) > 0) {
      const hours = Math.trunc(seconds / 3600);
      arr.push(`${hours} ${hours > 1 ? 'hours' : 'hour'}`);
      seconds -= hours * 3600;
    } else if (Math.trunc(seconds / 60) > 0) {
      const minutes = Math.trunc(seconds / 60);
      arr.push(`${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`);
      seconds -= minutes * 60;
    } else if (seconds > 0) {
      arr.push(`${seconds} ${seconds > 1 ? 'seconds' : 'second'}`);
      seconds -= seconds;
    }
  }

  return arr.length === 1
    ? arr[0]
    : arr.length === 2
    ? `${arr[0]} and ${arr[1]}`
    : arr
        .map((el, i) => {
          if (i === arr.length - 2) return `${el} and `;
          if (i === arr.length - 1) return el;
          return `${el}, `;
        })
        .join('');
}

console.log(formatDuration(8634210)); //'99 days, 22 hours, 23 minutes and 30 seconds'

//60 * 60 * 24 * 365;
