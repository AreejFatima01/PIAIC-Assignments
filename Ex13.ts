/* Your Own Array:Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as
// “I would like to own a Honda motorcycle.” */

// Storing favorite modes of transportation in an array
const transportationModes: string[] = ["motorcycle", "car", "bicycle", "scooter"];

// Printing statements about each mode
for (const mode of transportationModes) {
    console.log(`I would like to own a ${mode}.`);
}

