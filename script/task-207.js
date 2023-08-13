/*8 kyu №207

Hello, Name or World!
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
FUNDAMENTALS

*/
function hello(name) {
  return `Hello, ${
    typeof name !== 'string' || name.length === 0
      ? 'World'
      : name.toLowerCase().replace(name[0].toLowerCase(), name[0].toUpperCase())
  }!`;
}

console.log(hello('GERAlD')); // "Hello, Gerald!"
