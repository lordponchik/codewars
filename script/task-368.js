/*
8 kyu 368
Calculate Price Excluding VAT
Write a function that calculates the original product price, without VAT.

Example
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1
MATHEMATICSFUNDAMENTALS

*/
function excludingVatPrice(price) {
  if (price === null) return -1;
  return Number.parseFloat(((price * 100) / 115).toFixed(2));
}

console.log(excludingVatPrice(123));
