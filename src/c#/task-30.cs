/* 7lvl. Unscrambled eggs
Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

Example
unscrambleEggs("Beggegeggineggneggeregg")  =>  "Beginner"
//             "B---eg---in---n---er---"
Kata is supposed to be for beginners to practice reggular eggspressions, so commenting would be appreciated.

Fundamentals*/

using System;

namespace Task30
{
    public class Task30
    {
        public static void Task_30()
        {
            Console.WriteLine(UnscrambleEggs("Beggegeggineggneggeregg")); // "Beginner"
            Console.WriteLine(UnscrambleEggs("ceggodegge heggeregge")); //"code here"
            Console.WriteLine(UnscrambleEggs("FeggUNegg KeggATeggA")); //"FUN KATA"
        }

        public static string UnscrambleEggs(string word)
        {
            //coding is feggunegg
            return word.Replace("egg", "");
        }
    }
}


