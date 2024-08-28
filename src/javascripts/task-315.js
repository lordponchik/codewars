/*
8 kyu 315
For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
This is a beginner friendly kata especially for UFC/MMA fans.

It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

If the winner is George Saint Pierre he will obviously say:

"I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:

"I'd like to take this chance to apologize.. To absolutely NOBODY!"
Good Luck!

Note
The given name may varies in casing, eg., it can be "George Saint Pierre" or "geOrGe saiNT pieRRE". Your solution should treat both as the same thing (case-insensitive).

FUNDAMENTALS
*/

var quote = function (fighter) {
  // your code here
  const pierreName = 'george saint pierre';
  const mcgregorName = 'conor mcgregor';

  if (fighter.toLowerCase() === pierreName) return 'I am not impressed by your performance.';
  if (fighter.toLowerCase() === mcgregorName)
    return `I'd like to take this chance to apologize.. To absolutely NOBODY!`;
};

console.log(quote('george saint pierre')); // "I am not impressed by your performance."
console.log(quote('conor mcgregor')); // "I'd like to take this chance to apologize.. To absolutely NOBODY!"
