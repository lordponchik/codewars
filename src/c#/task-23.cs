﻿/*
8 lvl. Groß-/Kleinschreibung prüfen
Schreiben Sie eine Funktion, die prüft, ob zwei gegebene Zeichen die gleiche Groß-/Kleinschreibung haben.

Ist eines der Zeichen kein Buchstabe, wird -1 zurückgegeben.
Ist beide Zeichen die gleiche Groß-/Kleinschreibung, wird 1 zurückgegeben.
Ist beide Zeichen Buchstaben, aber nicht die gleiche Groß-/Kleinschreibung, wird 0 zurückgegeben.
Beispiele:
'a' und 'g' geben 1 zurück.

'A' und 'C' geben 1 zurück.

'b' und 'G' geben 0 zurück.

'B' und 'g' geben 0 zurück.

'0' und '?' geben -1 zurück.

Grundlagen
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


