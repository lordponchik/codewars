/*8 kyu №159

Surface Area and Volume of a Box
Write a function that returns the total surface area and volume of a box as an array: [area, volume]

GEOMETRYFUNDAMENTALS
*/

function getSize(width, height, depth) {
  const area =
    width === height ? 6 * width * height : 2 * (width * depth + width * height + height * depth);
  const volume = width * height * depth;
  return [area, volume];
}

console.log(getSize(4, 2, 6)); // [88, 48]
