// Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Define your favorite fruits array
const favoriteFruits: string[] = ["mango", "pineapple", "watermelon"];

// Check for each fruit independently using if statements
if (favoriteFruits.includes("mango")) {
  console.log("You really like mangoes! ");
}

if (favoriteFruits.includes("pineapple")) {
  console.log("You really like pineapples! ");
}

if (favoriteFruits.includes("watermelon")) {
  console.log("You really like watermelons! ");
}

// Check for other fruits using array methods for versatility
if (favoriteFruits.some((fruit) => fruit === "banana")) {
  console.log("You must like bananas! "); // Can accommodate multiple instances
}

if (favoriteFruits.every((fruit) => fruit !== "apple")) {
  console.log("You don't seem to like apples? "); // Checks for absence
}
