/*
7 lvl. Find all occurrences of an element in an array
Alle Vorkommen eines Elements in einem Array finden
Gegeben sei ein Array (eine Liste in Python) mit Ganzzahlen und eine Ganzzahl n. Alle Vorkommen von n im gegebenen Array finden und ein anderes Array zurückgeben, das alle Indexpositionen von n im gegebenen Array enthält.

Wenn n nicht im gegebenen Array enthalten ist, ein leeres Array zurückgeben [].

Gehen Sie davon aus, dass n und alle Werte im gegebenen Array immer Ganzzahlen sind.

Beispiel:

Kata.FindAll(new int[] {6, 9, 3, 4, 3, 82, 11}, 3) => new int[] {2, 4}
Grundlagen
*/


using System.Collections.Generic;
namespace Task10
{
    class Task10
    {

        public static void Task_10()
        {

            Console.WriteLine(FindAll([6, 9, 3, 4, 3, 82, 11], 3)); // {2, 4}
            Console.WriteLine(FindAll([6, 9, 3, 4, 3, 82, 11], 0)); // {}

        }

        public static int[] FindAll(int[] array, int n)
        {
            List<int> newArr = [];

            for (int i = 0; i < array.Length; i += 1)
            {
                if (array[i] == n) newArr.Add(i);
            }

            foreach (var item in newArr)
            {
                System.Console.WriteLine(item);
            }
            return newArr.ToArray();
        }
    }

}
