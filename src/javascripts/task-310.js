/*
8 kyu 310
Duck Duck Goose
The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
// PHP only
duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]
ARRAYSLISTSFUNDAMENTALS
*/

class Player {
  constructor(name) {
    this.name = name;
  }
}

let ex_names = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'z'];
let players = ex_names.map(n => new Player(n));
console.log(players);

function duckDuckGoose(players, goose) {
  // ...
  if (players.length < goose) {
    const step = Math.trunc(goose / players.length);

    return step === goose / players.length
      ? players[players.length - 1].name
      : players[goose - step * players.length - 1].name;
  }
  return players[goose - 1].name;
}

console.log(duckDuckGoose(players, 31)); //[4,6,8]
