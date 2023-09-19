/*
8 kyu 280
Regexp Basics - is it a digit?
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/

String.prototype.digit = function () {
  return (
    !this.includes('\n') &&
    this.trim().length !== 0 &&
    this.length === 1 &&
    typeof +this === 'number' &&
    +this <= 9 &&
    +this >= 0
  );
};

console.log('-1'.digit());
console.log('\n5\n'.digit());
console.log('   1'.digit());
