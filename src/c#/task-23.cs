/*
8 lvl. Check same case
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

Fundamentals
*/

using System.Collections.Generic;

namespace Task23
{
    class Task23
    {

        public static void Task_23()
        {
            System.Console.WriteLine(SameCase('a', 'c')); //1
            System.Console.WriteLine(SameCase('A', 'R')); //1
            System.Console.WriteLine(SameCase('a', 'C')); //0
            System.Console.WriteLine(SameCase('0', '?')); //-1
        }



        public static int SameCase(char a, char b)
        {
            if (!char.IsLetter(a) || !char.IsLetter(b)) return -1;
            else if (char.IsLower(a) && char.IsLower(b) || char.IsUpper(a) && char.IsUpper(b)) return 1;
            else return 0;
        }
    }
}


