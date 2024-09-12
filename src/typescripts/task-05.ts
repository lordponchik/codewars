/*
7 kyu 5
Hungarian Vowel Harmony (easy)
Vowel harmony is a phenomenon in some languages. 
It means that "A vowel or vowels in a word are changed to sound 
the same (thus "in harmony.")" (wikipedia). This kata is based on 
vowel harmony in Hungarian.

Task:
Your goal is to create a function dative() (Dative() in C#) 
which returns the valid form of a valid Hungarian word w in dative
 case i. e. append the correct suffix nek or nak to the word w 
 based on vowel harmony rules.

Vowel Harmony Rules (simplified)
When the last vowel in the word is

a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
a back vowel (a, á, o, ó, u, ú) the suffix is -nak
Examples:
dative("ablak") == "ablaknak"
dative("szék") == "széknek"
dative("otthon") == "otthonnak"
*/

export function dative(word: string): string | undefined {
  const frontVowel: string[] = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű'];
  const backVowel: string[] = ['a', 'á', 'o', 'ó', 'u', 'ú'];

  const arrWord: string[] = [...word].reverse();

  for (let i = 0; i < arrWord.length; i++) {
    if (frontVowel.includes(arrWord[i])) return `${word}nek`;
    else if (backVowel.includes(arrWord[i])) return `${word}nak`;
  }
}

console.log(dative('ablak')); // ablaknak
console.log(dative('szék')); // "széknek"
console.log(dative('otthon')); // "otthonnak"
