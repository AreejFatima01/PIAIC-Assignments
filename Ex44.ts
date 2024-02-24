// Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function orderSandwich(...items: string[]): void {
  if (items.length === 0) {
    console.log("You haven't ordered any sandwich yet!");
    return;
  }

  console.log("You ordered a sandwich with:");
  for (const item of items) {
    console.log(`- ${item}`);
  }
}

// Call the function three times with different numbers of arguments
orderSandwich(); // No items
orderSandwich("turkey", "cheese"); // Two items
orderSandwich("bread", "lettuce", "tomato", "mustard"); // Four items
