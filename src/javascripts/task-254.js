/*
5 kyu №254
Human Readable Time
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

DATE TIMEMATHEMATICSALGORITHMS
*/

function humanReadable(seconds) {
  const HH = Math.trunc(seconds / 60 / 60);
  const MM = Math.trunc((seconds - HH * 60 * 60) / 60);
  const SS = Math.trunc(seconds - HH * 60 * 60 - MM * 60);

  return `${HH.toString().padStart(2, '0')}:${MM.toString().padStart(
    2,
    '0'
  )}:${SS.toString().padStart(2, '0')}`;
}

console.log(humanReadable(29146)); // "08:05:46" => 28800+300+46 => 29146
console.log(humanReadable(359999)); // "99:59:59"
