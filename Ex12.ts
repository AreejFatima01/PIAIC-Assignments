/* Greetings:
Start with the array you used in Exercise 11,
but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized
with the person’s name.*/

// Storing names of friends in an array
const names: string[] = ["Maliha", "Aneeka", "Laiba", "Aiman"];

// Printing personalized messages to each person
for (const name of names) {
    console.log(`Hello, ${name}! You're an awesome friend.`);
}

