/*
7 kyu 401
Regex validate PIN code
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
REGULAR EXPRESSIONSFUNDAMENTALS
*/
function validatePIN(pin) {
  //return true or false
  const chars = ['.', '-', '+', '*', '/', '\n', 'E'];

  return (
    !isNaN(pin) &&
    (pin.length === 4 || pin.length === 6) &&
    ![...pin].some(el => chars.includes(el))
  );
}

console.log(validatePIN('.123')); // false
console.log(validatePIN('-1.234')); // false
console.log(validatePIN('123\n')); // false
console.log(validatePIN('19E946')); // false
