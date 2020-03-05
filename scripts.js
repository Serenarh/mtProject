const book = {};

book.lastName = prompt("What is your author's last name?");
while (!book.lastName) {
  alert("This field cannot be left blank.");
  book.lastName = prompt("What is your author's last name?");

book.firstName = prompt("What is your author's first name?");
while (!book.firstName) {
  alert("This field cannot be left blank.");
  book.firstName = prompt("What is your author's first name?");
}

book.title = prompt("What is your book's title?");
while (!book.title) {
  alert("This field cannot be left blank.");
  book.title = prompt("What is your title?");
}

book.period = prompt("What is your book's period?");
while (!book.period) {
  alert("This field cannot be left blank.");
  book.period = prompt("What is your book's literary period?");
}

book.genre = prompt("What is your book's genre?");
