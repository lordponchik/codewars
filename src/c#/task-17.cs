/*
7 lvl. Initialisiere meinen Namen
Manche Leute haben nur einen Vornamen, manche Leute haben Vor- und Nachnamen und manche Leute haben Vor-, Mittel- und Nachnamen.

Ihre Aufgabe ist es, die Mittelnamen zu initialisieren (falls es welche gibt).

Beispiele
'Jack Ryan' => 'Jack Ryan'
'Lois Mary Lane' => 'Lois M. Lane'
'Dimitri' => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
StringsFundamentals
*/

using System.Collections.Generic;

namespace Task17
{
    class Task17
    {

        public static void Task_17()
        {
            System.Console.WriteLine(InitializeNames("Jack Ryan")); //Jack Ryan
            System.Console.WriteLine(InitializeNames("Lois Mary Lane")); //Lois M. Lane
            System.Console.WriteLine(InitializeNames("Dimitri")); //Dimitri
            System.Console.WriteLine(InitializeNames("Alice Betty Catherine Davis")); //Alice B. C. Davis
        }



        public static string InitializeNames(string name)
        {
            string[] nameInArr = name.Split(" ");
            List<string> kurzeName = [];


            if (nameInArr.Length <= 2) return name;

            for (int i = 0; i < nameInArr.Length; i += 1)
            {
                if (i == 0)
                {
                    kurzeName.Add(nameInArr[0]);
                    continue;
                }
                if (i == nameInArr.Length - 1)
                {
                    kurzeName.Add(nameInArr[nameInArr.Length - 1]);
                    continue;
                }
                kurzeName.Add($"{nameInArr[i].Substring(0, 1)}.");
            }

            return string.Join(" ", kurzeName);
        }
    }
}


