// Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// Passing the if test (alien is green)
let alien_color = "green";

if (alien_color === "green") {
  console.log("You just earned 5 points!");
}

// Failing the if test (alien is not green)
alien_color = "red";

if (alien_color === "green") {
  console.log("You failed!"); // This line won't be executed
}
