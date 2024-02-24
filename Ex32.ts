// Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
const current_users = ["Hassan", "Kazim", "Ahmed", "Mateen", "Taha"];
const new_users = ["Talha", "Kazim", "Hassan", "Saad", "Farjad"];

function is_username_available(
  username: string,
  current_users: string[]
): boolean {
  for (const user of current_users) {
    if (username.toLowerCase() === user.toLowerCase()) {
      return false;
    }
  }
  return true;
}

for (const username of new_users) {
  if (is_username_available(username, current_users)) {
    console.log(`Username '${username}' is available!`);
  } else {
    console.log(
      `Username '${username}' is already taken. Please choose another username.`
    );
  }
}
