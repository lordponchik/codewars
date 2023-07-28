/*8 kyu №174
Cat years, Dog years

Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
References

http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
If you liked this Kata there is another related one here

FUNDAMENTALS

*/

var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  return [
    humanYears,
    humanYears > 2 ? 24 + (humanYears - 2) * 4 : humanYears === 2 ? 24 : 15,
    humanYears > 2 ? 24 + (humanYears - 2) * 5 : humanYears === 2 ? 24 : 15,
  ];
};

console.log(humanYearsCatYearsDogYears(3)); // [1,15,15]
