//They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.

interface Book {
  title: string;
  author: string;
  genre?: string; // Optional property
  description?: string; // Optional property
  isbn: string; // Unique identifier
  yearPublished: number;
  copiesAvailable?: number; // Optional property, defaults to 1
}

const books: Book[] = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    isbn: "9780547928220",
    yearPublished: 1954,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    isbn: "9780140439516",
    yearPublished: 1813,
    copiesAvailable: 2,
  },
  // ... add more books here
];

// Function to print book information
function printBookInfo(book: Book) {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  if (book.genre) {
    console.log(`Genre: ${book.genre}`);
  }
  if (book.description) {
    console.log(`Description: ${book.description}`);
  }
  console.log(`ISBN: ${book.isbn}`);
  console.log(`Year Published: ${book.yearPublished}`);
  if (book.copiesAvailable) {
    console.log(`Copies Available: ${book.copiesAvailable}`);
  }
  console.log("--------------------");
}

// Print information for all books
for (const book of books) {
  printBookInfo(book);
}

// Example of adding a new book
const newBook: Book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  isbn: "9780446310727",
  yearPublished: 1960,
  description: "A powerful story about racial injustice in the American South.",
};

books.push(newBook);
console.log("Added new book:");
printBookInfo(newBook);

// Example of searching for a book by ISBN
const isbnToFind = "9780140439516";
const foundBook = books.find((book) => book.isbn === isbnToFind);

if (foundBook) {
  console.log("Found book:");
  printBookInfo(foundBook);
} else {
  console.log("Book with ISBN", isbnToFind, "not found.");
}
