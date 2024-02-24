/*Names:
Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.*/

// Storing names of friends in an array
const names: string[] = ["Maliha", "Laiba", "Aneeka", "Aiman"];

// Printing each person's name
for (const name of names) {
    console.log(`Friend's name: ${name}`);
}
