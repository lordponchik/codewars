/*
7 lvl. Eindeutige Summe
Bei einer Liste ganzer Werte besteht Ihre Aufgabe darin, die Summe der Werte zurückzugeben. Kommt derselbe ganzzahlige Wert jedoch mehrfach in der Liste vor, kann er nur einmal in der Summe berücksichtigt werden.

Beispiel:

Kata.UniqueSum(new List<int> {1, 2, 3}) => 6

Kata.UniqueSum(new List<int> {1, 3, 8, 1, 8}) => 12

Kata.UniqueSum(new List<int> {-1, -1, 5, 2, -7}) => -1

Kata.UniqueSum(new List<int>()) => null
Viel Erfolg!

ListenLogikFilternGrundlagen
*/

using System;
using System.Collections.Generic;

namespace Task25
{
    class Task25
    {

        public static void Task_25()
        {

            System.Console.WriteLine(UniqueSum([1, 2, 3])); //6
            System.Console.WriteLine(UniqueSum([1, 3, 8, 1, 8])); //12
            System.Console.WriteLine(UniqueSum([-1, -1, 5, 2, -7])); //-1
            System.Console.WriteLine(UniqueSum([])); //null 
        }


        public static int? UniqueSum(List<int> lst)
        {
            if (lst.Count == 0) return null;

            int ergebnis = 0;

            for (int i = 0; i < lst.Count; i += 1)
            {
                if (i != lst.IndexOf(lst[i]))
                {
                    continue;
                }
                ergebnis += lst[i];
            }

            return ergebnis;
        }

    }
}


