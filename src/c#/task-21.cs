﻿/*
7 lvl. Hells Kitchen
Gordon Ramsay schreit. Er schreit und flucht. Vielleicht stimmt etwas nicht mit ihm.

Du erhältst eine Reihe von vier Wörtern. Deine Aufgabe ist es, sie in die Sprache Gordons zu übersetzen.

Regeln:

Natürlich sollten die Wörter großgeschrieben werden. Jedes Wort endet mit „!!!!“. Jeder Buchstabe „a“ oder „A“ wird zu „@“, jeder andere Vokal zu „*“.

Grundlagen: Strings & Arrays
*/

using System.Collections.Generic;

namespace Task21
{
    class Task21
    {

        public static void Task_21()
        {
            System.Console.WriteLine(Gordon("What feck damn cake")); //"WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!"
            System.Console.WriteLine(Gordon("are you stu pid")); //"@R*!!!! Y**!!!! ST*!!!! P*D!!!!"
            System.Console.WriteLine(Gordon("i am a chef")); //"*!!!! @M!!!! @!!!! CH*F!!!!"
        }



        public static string Gordon(string a)
        {
            char[] vokale = ['A', 'E', 'I', 'O', 'U'];
            string[] arr = a.Split(" ");

            for (int i = 0; i < arr.Length; i += 1)
            {
                arr[i] = string.Concat(arr[i].Select((el) =>
                {
                    el = char.ToUpper(el);

                    if (Array.Exists(vokale, v => v == el))
                    {
                        if (el == 'A') return '@';

                        return '*';
                    }

                    return el;
                }));

                arr[i] += "!!!!";
            }


            return string.Join(" ", arr);
        }
    }
}


