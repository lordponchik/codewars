/*
7 lvl. Gerade mal Letzte
Gibt man eine Folge von Ganzzahlen aus, wird die Summe aller Ganzzahlen mit geradem Index (ungeradem Index in COBOL) multipliziert mit der Ganzzahl am letzten Index zurückgegeben.

Die Indizes in der Folge beginnen bei 0.

Ist die Folge leer, wird 0 zurückgegeben.
*/

using System.Collections.Generic;

namespace Task22
{
    class Task22
    {

        public static void Task_22()
        {
            System.Console.WriteLine(EvenTimesLast([7, 13])); //91
            System.Console.WriteLine(EvenTimesLast([2, 3, 4, 5])); //30
            System.Console.WriteLine(EvenTimesLast([2, 3, 4, -1])); //-6
            System.Console.WriteLine(EvenTimesLast([])); //0
        }



        public static int EvenTimesLast(int[] arr)
        {
            if (arr.Length == 0) return 0;

            int ergebnis = 0;

            for (int i = 0; i < arr.Length; i++)
            {
                if (i % 2 == 0)
                {
                    ergebnis += arr[i];
                }
            }

            ergebnis *= arr[arr.Length - 1];

            return ergebnis;
        }
    }
}


