/*Shrinking Guest List: You jShrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program*/
 // Initialize the list of guests
const guestList: string[] = ["Aneeka", "Maliha", "Laiba", "Rabia", "Aiman"];

// Print a message indicating that only two people can be invited
console.log("Due to unforeseen circumstances, the dinner table won't arrive in time.");
console.log("You can invite only two guests for dinner.");

// Remove guests from the list until only two remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, you won't be able to join us for dinner.`);
}

// Print a message to the remaining two guests
console.log(`Dear ${guestList[0]} and ${guestList[1]}, you're still invited!`);

// Empty the list
guestList.length = 0;

// Verify that the list is empty
console.log("Guest list after removing everyone:", guestList);



