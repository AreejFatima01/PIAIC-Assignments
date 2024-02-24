/*Think of something you could store in a array. 
For example, you could make a list of mountains, rivers, countries, cities, languages, 
or anything else you’d like. Write a program that creates a list containing these items.*/

// Initialize an array with dream travel destinations
const placesToVisit: string[] = [
    "Kashmir",
    "Switzerland",
    "Australia",
    "Paris",
    "Canada"
];

// Print the list of places
console.log("Dream travel destinations:");
for (const place of placesToVisit) {
    console.log(place);
}


