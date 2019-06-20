console.log("linked");

const books = [
  { id: "book1", author: "author1", alreadyRead: true },
  { id: "book2", author: "author2", alreadyRead: false },
  { id: "book3", author: "author3", alreadyRead: true },
  { id: "book4", author: "author4", alreadyRead: false }
];

let displayBook = function() {
  return books
    .map(
      book =>
        `<li>The ${book.id} Written by ${book.author} and it is ${read(
          book
        )}</li>`
    )
    .join(" ");
};

let read = book => {
  if (book.alreadyRead) return "Read";
  else {
    return "Unread";
  }
};

let template = `<ul>${displayBook()}</ul>`;
console.log(template);
document.getElementById("container").innerHTML = template;
