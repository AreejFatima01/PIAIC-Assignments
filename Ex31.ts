//Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
// Empty usernames array to simulate no users
const usernames: string[] = [];

function determineLifeStage(age: number): string {
  if (age < 2) {
    return "baby";
  } else if (age < 4) {
    return "toddler";
  } else if (age < 13) {
    return "kid";
  } else if (age < 20) {
    return "teenager";
  } else if (age < 65) {
    return "adult";
  } else {
    return "elder";
  }
}

function greetUsers(usernames: string[]) {
  if (usernames.length === 0) {
    console.log("We need to find some users!");
  } else {
    for (const username of usernames) {
      console.log(`Hello ${username}, thank you for logging in!`);
    }
  }
}

// Sample usage:
let userAge = 30;
console.log(`This person is a(n) ${determineLifeStage(userAge)}`);

usernames.push("John", "Alice", "Bob"); // Add usernames for greeting
greetUsers(usernames);
