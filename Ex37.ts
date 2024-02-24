// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size = "large", message = "I love TypeScript!"): void {
  console.log(`I made a ${size} shirt with the message: "${message}"`);
}

// Make a large shirt with the default message
makeShirt();

// Make a medium shirt with the default message
makeShirt("medium");

// Make a shirt of any size with a different message
makeShirt("small", "Python is great!");
