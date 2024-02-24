//If you haven’t received an array index error in one of your programs yet
// try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const books: Book[] = [
  // ... books
];

// Function to print book information
function printBookInfo(book: Book) {
  // ...
}

// Example of adding a new book
const newBook: Book = {
  // ...
};

books.push(newBook); // Add new book
console.log("Added new book:");
printBookInfo(books[books.length]); // Potential error
