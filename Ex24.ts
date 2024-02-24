//You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
//(String values are identical)
let str1 = "Hello";
let str2 = "Hello";
console.log(str1 === str2);
//(Case-sensitive difference)
let str3 = "World";
let str4 = "world";
console.log(str3 === str4);
//(Converted to lowercase for comparison)
let str5 = "Mix";
let str6 = "MIX";
console.log(str5.toLowerCase() === str6.toLowerCase());
// ("Apple" doesn't contain str8)
let str7 = "Apple";
let str8 = "Orange";
console.log(str7.includes(str8));
//(Exact numerical match)
let num3 = 123;
let num4 = 123;
console.log(num3 === num4);
//(Floating-point precision can lead to slight differences)
let num5 = 3.14;
let num6 = Math.PI;
console.log(num5 === num6);
//(Less than comparison)
let num7 = 5;
let num8 = 8;
console.log(num7 < num8);
//(Greater than comparison)
let num1 = 10;
let num2 = 10;
console.log(num1 > num2);
//(less than )
let age = 25;
console.log(age >= 18);
let temperature = -10;
console.log(temperature <= 0);
////(Both conditions met)
let score = 85;
let attendance = 90;
console.log(score >= 70 && attendance >= 80);
// ("Tuesday" doesn't match)
let day = "Tuesday";
console.log(day === "Monday" || day === "Friday");
// (Short-circuit evaluation: x === 0 is false, so second part isn't checked)
let x = 0;
console.log(x > 0 || (x === 0 && x < 0));
// (Number 2 is present)
let numbers = [1, 2, 3];
console.log(numbers.includes(2));
//(David not found)
let names = ["Alice", "Bob", "Charlie"];
console.log(!names.includes("David"));
//(At least one fruit starts with "a")
let fruits = ["apple", "banana", "orange"];
console.log(fruits.some((fruit) => fruit.startsWith("a")));
//(Not all numbers are even)
let evenNumbers = [2, 4, 6];
console.log(!evenNumbers.every((number) => number % 2 === 0));
