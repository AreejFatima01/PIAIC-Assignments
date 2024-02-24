//Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified
// Function to format city and country into a string
function cityCountry(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Array of magician names
const magicianNames: string[] = ["David", "Tony", "Ahmed", "Subhani"];

// Function to modify magician names in-place (avoid unnecessary array creation)
function makeGreat(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `${magicians[i]} the Great`;
  }
}

// Function to print magician names
function showMagicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Print city-country pairs
console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("Tokyo", "Japan"));
console.log(cityCountry("New York City", "USA"));

// Print original magician names
console.log("Original magicians:");
showMagicians(magicianNames);

// Modify magician names in-place
makeGreat(magicianNames);

// Print updated magician names
console.log("\nMagicians after being made great:");
showMagicians(magicianNames);
