//Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const magicianNames: string[] = ["David", "Tony", "Ahmed", "Subhani"];

// Function to format city and country into a string
function cityCountry(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Function to create an album object
function makeAlbum(
  artistName: string,
  albumTitle: string,
  tracks?: number
): object {
  const album: object = {};
  album["artist"] = artistName;
  album["title"] = albumTitle;
  if (tracks) {
    album["tracks"] = tracks;
  }
  return album;
}

// Function to modify magician names and return a new array
function makeGreat(magicians: string[]): string[] {
  const newMagicians: string[] = []; // Create a new array

  for (const magician of magicians) {
    newMagicians.push(`${magician} the Great`);
  }

  return newMagicians;
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

// Modify magician names and store in a new array
const greatMagicians = makeGreat(magicianNames);

// Print updated magician names
console.log("\nMagicians after being made great:");
showMagicians(greatMagicians);
