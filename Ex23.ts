// Write a series of conditional tests.
//Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = "subaru";

console.log("Is car == 'subaru'? I predict True.");

console.log(car == "subaru");

// Test 1: Exact comparison
let car = "subaru";
console.log("Is car === 'subaru'? I predict True.");
console.log(car === "subaru"); // True, exact value and type match

// Test 2: Loose comparison
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == "Subaru"); // True, loose comparison ignores case

// Test 3: Type check
let age = 25;
console.log("Is age typeof number? I predict True.");
console.log(typeof age === "number"); // True, checks type

// Test 4: Null and undefined check
let name: string | null = null;
console.log("Is name === null? I predict True.");
console.log(name === null); // True, checks for null

// Test 5: Length check
let message = "Hello, world!";
console.log("Is message.length > 10? I predict True.");
console.log(message.length > 10); // True, checks string length

// Test 6: Equality with coercion
let num1 = 10;
let num2 = 10;
console.log("Is num1 == num2? I predict True.");
console.log(num1 == num2); // True, coerces string to number

// Test 7: Inequality with strict comparison
console.log("Is num1 !== num2? I predict True.");
console.log(num1 !== num2); // True, strict comparison ignores coercion

// Test 8: Boolean check
let isTrue = true;
console.log("Is thisTrue? I predict True.");
console.log(isTrue); // True, checks boolean value

// Test 9: Falsy check
let emptyString = "";
console.log("Is emptyString ? I predict False.");
console.log(emptyString); // False, empty string is falsy

// Test 10: Nullish coalescing
let maybeNumber: number | null = null;
let defaultNumber = 5;
console.log("Is maybeNumber ?? defaultNumber equal to 5? I predict True.");
console.log(maybeNumber ?? defaultNumber === 5); // True, uses default value for nullish
