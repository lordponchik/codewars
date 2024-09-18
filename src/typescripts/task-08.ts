/*
7 kyu 8
Ch4113ng3
Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g.
 "Fundamentals" --> "Fund4m3nt41s"
*/

export function nerdify(txt: string): string {
  interface INerdyLetter {
    [key: string]: string;
  }

  const nerdyLetter: INerdyLetter = {
    a: '4',
    A: '4',
    e: '3',
    E: '3',
    l: '1',
  };

  const keysObj = Object.keys(nerdyLetter);

  return [...txt]
    .map(el => {
      if (keysObj.includes(el)) return nerdyLetter[el];
      return el;
    })
    .join('');
}

console.log(nerdify('Fundamentals')); //"Fund4m3nt41s"
