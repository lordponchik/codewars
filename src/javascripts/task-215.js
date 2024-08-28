/*6 kyu №215
6 kyu
Consonant value
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
For C: do not mutate input.

More examples in test cases. Good luck!

If you like this Kata, please try:

Word values

Vowel-consonant lexicon

STRINGSFUNDAMENTALS
*/
function solve(s) {
  const arr_en = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const arrVowels_en = ['a', 'e', 'i', 'o', 'u'];
  const arrS = s.split('');
  let arrSum = [];
  let step = 0;

  for (let i = 0; i < arrS.length; i += 1) {
    if (arrVowels_en.includes(arrS[i]) && !arrVowels_en.includes(arrS[i + 1])) {
      step += 1;
      continue;
    }

    if (typeof arrSum[step] === 'undefined') {
      if (arrVowels_en.includes(arrS[i])) {
        arrSum.push(0);
        continue;
      }
      arrSum.push(arr_en.indexOf(arrS[i]) + 1);
    } else {
      if (arrVowels_en.includes(arrS[i])) {
        arrSum.push(0);
        continue;
      }
      arrSum[step] += arr_en.indexOf(arrS[i]) + 1;
    }
  }

  return Math.max(...arrSum);
}

console.log(solve('strength')); // 57
console.log(solve('zodiacs')); //26
console.log(
  solve(
    'iazzxyvargoaqoupeeiotaobkasaheuuijxikfksaiuagnaiumeowjuueoiwofudhsrxujauueeibaiyiuuochuukxnziooimaybayafiamoexsnuvzvuiuhaeihzhaaluuuanpmxviazzxyveenuwlwyuxopueiaeknyaimujpqneeuriuyolsaeeeuukeeyeuooriaotiioepubittqwieoxaeuwouiaonuiauleoneujiasuesdooiiiiaasxouthziiqkovuyeoworaraubeoailooeoedonoxiuudpukiyjeioauaehiuaweviabaogaziumuueekeaorqbboeietktsrzoceekaeuvoigoiveuoabunieaakajuiomfxaenwqghojwoinioqxoavgeikeuokuealfqofairouazaleliioootwlhaejoioaeooiugpooumaiuolweiouhoaarilesiuabobteoreuiivouadalkpetafceanverikpqsqiiexhkuqaoleaeeadyuwameogouutaedioimodcoenuuahufofwgnhaanoueluhtyeohoeuigfeldkiuepiaueebeeueiosxiuaiicuyitsainiaiuauaoxuiqiouobwoxiuqzlarfrbaasoumopoorquoeugqitvsioloefriuyltqctuorzaalufefrecwaxufekeeoiavbiaiugkaoaiyiaieknjaiukfexoeceearooiunocieuesiuteuoudeaickasafswiinazuuhijauiitoggzuiaovuoujggvfcuitjhogauxefiiueeamaimwoueuoiceuuizboaaaiheeiiuiwcuaocujluoc'
  )
);
