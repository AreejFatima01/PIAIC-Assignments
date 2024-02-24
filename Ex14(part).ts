/* • Start with your program from Guest List:
If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
Add a print statement at the end of your program stating the name of the guest
who can’t make it.*/

function inviteGuests1(guests: string[]): void {
    for (const guest of guests) {
        console.log(`Hello, ${guest}, would you like to come to dinner?`);
    }
}

const originalGuests: string[] = ['Eman', 'Fatima', 'Hafsa'];
inviteGuests(originalGuests);

// Unfortunately, Eman can't make it.
console.log(`Unfortunately, Eman won't be able to attend.`);

/* • Start with your program from Guest List:
If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
Add a print statement at the end of your program stating the name of the guest
who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of
the new person you are inviting.*/


function inviteGuests(guests: string[]): void {
    for (const guest of guests) {
        console.log(`Hello, ${guest}, would you like to come to dinner?`);
    }
}

const revisedGuests: string[] = ['Fatima', 'Hafsa', 'Aiman'];
inviteGuests(revisedGuests);

// Unfortunately, Eman can't make it.
console.log(`Unfortunately, Eman won't be able to attend.`);

export{}

//• Print a second set of invitation messages, one for each person who is still in your list.

function inviteGuests2(guests: string[]): void {
    for (const guest of guests) {
        console.log(`Hello, ${guest}, would you like to come to dinner?`);
    }
}

const revisedGuests1: string[] = ['Fatima', 'Hafsa', 'Aiman'];
inviteGuests(revisedGuests1);

// Unfortunately, Eman can't make it.
console.log(`Unfortunately, Eman won't be able to attend.`);

// Now, let's send out the second set of invitations.
console.log('\nSecond Set of Invitations:');
for (const guest of revisedGuests) {
    console.log(`Hello again, ${guest}! We hope to see you at dinner.`);
}
