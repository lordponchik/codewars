/*4 kyu №83
Sum Strings as Numbers
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

STRINGSBIG INTEGERSALGORITHMS
*/
function sumStrings(a, b) {
  return String(BigInt(a) + BigInt(b));
}

console.log(sumStrings('123', '456')); // 579
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937')); //('712577413488402631964821329');
