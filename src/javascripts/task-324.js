/*
7 kyu 324
Over The Road
Task
You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

Street
1|   |6
3|   |4
5|   |2
  you
Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

Example (address, n --> output)
Given your house number address and length of street n, give the house number on the opposite side of the street.

1, 3 --> 6
3, 3 --> 4
2, 3 --> 5
3, 5 --> 8
Note about errors
If you are timing out, running out of memory, or get any kind of "error", read on. Both n and address could get upto 500 billion with over 200 random tests. If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash. This is not a kata problem so please don't post an issue. Similarly if the tests don't complete within 12 seconds then you also fail.

To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. Read the discourse for some inspiration :)

FUNDAMENTALSMATHEMATICSPERFORMANCE
*/
function overTheRoad(address, n) {
  //code here

  return n * 2 - (address - 1);
}
console.log(overTheRoad(1, 3)); // 6   1 - 6,3 - 4,5 - 2     // 1 5  2 6
console.log(overTheRoad(3, 3)); // 4   1 - 6,3 - 4,5 - 2     // 1 5 2 6      6/3=2
console.log(overTheRoad(2, 3)); // 5   1 - 6,3 - 4,5 - 2
console.log(overTheRoad(3, 5)); // 8   1 - 10,3 - 8,5 - 6,7 - 4,9 - 2
console.log(overTheRoad(7, 11)); // 16   1 - 22,3 - 20,5 - 18,7 - 16,9 - 14,11-12,13-10,15-8,17-6,19-4,21-2       1 21 2 22   10
