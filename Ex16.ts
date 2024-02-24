/* More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.*/

function inviteGuests(guests: string[]): void {
    for (const guest of guests) {
        console.log(`Hello, ${guest}, would you like to come to dinner?`);
    }
}

const expandedGuests: string[] = [
    'Fatima',
    'Hafsa',
    'Aiman',
    'Maliha',
    'Aneeka',
    'Laiba'
];

inviteGuests(expandedGuests);

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

function inviteGuests5(guests: string[]): void {
    for (const guest of guests) {
        console.log(`Hello, ${guest}, would you like to come to dinner?`);
    }
}

const expandedGuests2: string[] = [
    'Fatima',
    'Hafsa',
    'Aiman',
    'Maliha',
    'Aneeka',
    'Laiba'
];

inviteGuests(expandedGuests);

// Inform everyone about the bigger dinner table.
function inviteGuests3(guests: string[]): void {
    for (const guest of guests) {
        console.log(`Hello, ${guest}, would you like to come to dinner?`);
    }
}

const revisedGuests: string[] = ['Eman', 'Rabia', 'Maliha', 'Aneeka'];
inviteGuests(revisedGuests);

// Inform everyone about the bigger dinner table.
console.log(`Good news! We've found a larger dinner table. More space for great conversations! 🎉`);





//• Add one new guest to the beginning of your array.

function inviteGuests7(guests: string[]): void {
    for (const guest of guests) {
        console.log(`Hello, ${guest}, would you like to come to dinner?`);
    }
}

const updatedGuests: string[] = [
    'Iqra',
    'Maliha',
    'Rabia',
    'Hafsa',
    'Aiman'
];
inviteGuests(updatedGuests);



//• Add one new guest to the middle of your array.
//Use append() to add one new guest to the end of your list.
// Print a new set of invitation messages, one for each person in your list.

function inviteGuests9(guests: string[]): void {
    for (const guest of guests) {
        console.log(`Hello, ${guest}, would you like to come to dinner?`);
    }
}

const updatedGuests9: string[] = [
    'Maliha',
    'Aneeka',
    'Aiman',
    'Laiba',
    'Iqra',
    'Saira'
];

inviteGuests(updatedGuests9);

// Inform everyone about the bigger dinner table.
console.log(`Good news! We've found a larger dinner table. More space for great conversations! 🎉`);


