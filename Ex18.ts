/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/




// Think of at least five places you'd like to visit
const placesToVisit: string[] = [
    "Kashmir",
    "Thailand",
    "Switzerland",
    "Paris",
    "Australia"
];

// Print the array in its original order
console.log("Original order of places to visit:");
console.log(placesToVisit);

// Create a copy of the array and sort it alphabetically
const sortedPlaces = [...placesToVisit].sort();
console.log("\nPlaces in alphabetical order (without modifying the original list):");
console.log(sortedPlaces);

// Verify that the original array is still in its original order
console.log("\nOriginal order after sorting:");
console.log(placesToVisit);

// Create a copy of the array and sort it in reverse alphabetical order
const reverseSortedPlaces = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log("\nPlaces in reverse alphabetical order (without changing the original list):");
console.log(reverseSortedPlaces);

// Verify that the original array is still in its original order
console.log("\nOriginal order after reverse sorting:");
console.log(placesToVisit);

// Reverse the order of the original list
placesToVisit.reverse();
console.log("\nReversed order of places to visit:");
console.log(placesToVisit);

// Reverse the order of the original list again
placesToVisit.reverse();
console.log("\nBack to the original order:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted order of places to visit:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nReverse sorted order of places to visit:");
console.log(placesToVisit);









