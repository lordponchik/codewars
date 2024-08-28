/*8 kyu №24

Rock Paper Scissors!
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
rockpaperscissors


*/

const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!';

  const rulesRPS = {
    rock: {
      rock: 0,
      paper: 1,
      scissors: 0,
    },
    scissors: {
      rock: 1,
      paper: 0,
      scissors: 0,
    },
    paper: {
      rock: 0,
      paper: 0,
      scissors: 1,
    },
  };

  const p1_Score = rulesRPS[p2][p1];
  const p2_Score = rulesRPS[p1][p2];

  return `Player ${p1_Score > p2_Score ? '1' : '2'} won!`;
};

console.log(rps('scissors', 'paper')); //Player 1 won!
console.log(rps('scissors', 'rock')); // Player 2 won!
console.log(rps('paper', 'paper')); // "Draw!"
