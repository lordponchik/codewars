/*8 kyu №26
Calculate BMI
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

FUNDAMENTALS
*/

function bmi(weight, height) {
  const bmi = weight / Math.pow(height, 2);

  if (bmi > 18.5 && bmi <= 25.0) return 'Normal';
  if (bmi > 25.0 && bmi <= 30.0) return 'Overweight';
  if (bmi > 30) return 'Obese';

  return 'Underweight';
}

console.log(bmi(80, 1.8)); // "Normal"
