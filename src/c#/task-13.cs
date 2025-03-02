/*
7 lvl. Regexp-Grundlagen – ist es ein Vokal?
Implementieren Sie die Funktion, die „true“ zurückgeben soll, wenn das angegebene Objekt ein Vokal ist (also a, e, i, o, u, Groß- oder Kleinbuchstabe), und andernfalls „false“.

Reguläre AusdrückeGrundlagen
*/


using System.Collections.Generic;
using System.Text.RegularExpressions;
namespace Task13
{
    class Task13
    {

        public static void Task_13()
        {

            Console.WriteLine(Vowel("Niks")); // false;
            Console.WriteLine(Vowel("")); //  false
            Console.WriteLine(Vowel("e")); //  true
            Console.WriteLine(Vowel("E")); //  true
        }


        public static bool Vowel(string s)
        {
            if (s.Length > 1) return false;
            return Regex.IsMatch(s.ToLower(), "[aeiou]");
        }
    }
}


