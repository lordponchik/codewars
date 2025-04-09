/*
7 lvl. Say hello!
Say hello!

Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

Example:

greet("Niks") == "hello Niks!"
greet("") == null; // Return null if input is empty string
greet(null) == null; // Return null if input is null
Fundamentals
*/


using System.Collections.Generic;
namespace Task12
{
    class Task12
    {

        public static void Task_12()
        {

            Console.WriteLine(greet("Niks")); // hello Niks!
            Console.WriteLine(greet("")); //  null
            Console.WriteLine(greet(null)); //  null
        }

        public static string greet(string name)
        {
            if (string.IsNullOrEmpty(name)) return null;

            return $"hello {name}!";
        }
    }

}
