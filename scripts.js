const book = {};

book.lastName = prompt("What is your author's last name?");
while (!book.lastName) {
  alert("This field cannot be left blank.");
  book.lastName = prompt("What is your author's last name?");
}
while (Number(book.lastName)) {
  alert("You must enter a string, not a number.");
  book.lastName = prompt("What is your author's last name?");
}

book.firstName = prompt("What is your author's first name?");
while (!book.firstName) {
  alert("This field cannot be left blank.");
  book.firstName = prompt("What is your author's first name?");
}
while (Number(book.firstName)) {
  alert("You must enter a string, not a number.");
  book.firstName = prompt("What is your author's first name?");
}

book.title = prompt("What is your book's title?");
while (!book.title) {
  alert("This field cannot be left blank.");
  book.title = prompt("What is your title?");
}
while (Number(book.title)) {
  alert("You must enter a string, not a number.");
  book.title = prompt("What is your book's title?");
}

book.period = prompt("What is your book's literary period?");
while (!book.period) {
  alert("This field cannot be left blank.");
  book.period = prompt("What is your book's literary period?");
}
while (Number(book.period)) {
  alert("You must enter a string, not a number.");
  book.period = prompt("What is the book's literary period?");
}

book.genre = prompt("What is your book's genre?");
while (Number(book.genre)) {
  alert("You must enter a string, not a number.");
  book.genre = prompt("What is the book's genre?");
}

console.log(book);
