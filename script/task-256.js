/*
8 kyu №256
8 kyu
Well of Ideas - Easy Version
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

FUNDAMENTALSARRAYSSTRINGSREFACTORING
*/

function well(x) {
  const arrGoodLength = x.filter(el => el === 'good').length;

  return arrGoodLength > 2
    ? 'I smell a series!'
    : arrGoodLength === 1 || arrGoodLength === 2
    ? 'Publish!'
    : 'Fail!';
}
console.log(well(['bad', 'bad', 'bad'])); //"Fail!"
console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])); //'Publish!'
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])); // 'I smell a series!'
