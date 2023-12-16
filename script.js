const author = document.querySelector("#author");
const bookAddButton = document.querySelector("#addToCollection");
const contents = document.querySelector("#contents");
const form = document.querySelector("form");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const title = document.querySelector("#title");
const myLibrary = [];
let deleteButtons = document.querySelectorAll(".deleteButton");
let statusButtons = document.querySelectorAll(".statusButton");

const displayError = function displayErrorMessage(field, errorMessage) {
  const errorField = field.parentElement.querySelector("span > span");
  errorField.innerHTML = errorMessage;
};

const checkFilled = function checkIfFieldIsFilledOut(field) {
  const stringToCheck = field.value;
  let valid = false;
  if (stringToCheck.length > 0) {
    valid = true;
    displayError(field, "");
  }
  return valid;
};

const checkNumber = function checkIfFieldIsPositiveInteger(field) {
  const stringToCheck = field.value;
  if (isNaN(stringToCheck)) {
    return false;
  } else {
    const numberToCheck = Number(stringToCheck);
    if (Number.isInteger(numberToCheck)) {
      if (numberToCheck > 0) {
        displayError(field, "");
        return true;
      }
    }
  }
};

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  addBookToLibrary() {
    myLibrary.push(this);
    refreshLibrary();
  }

  addCard() {
    const titleHeading = createNewDiv("Title:");
    const titleContents = createNewDiv(this.title);
    const authorHeading = createNewDiv("Author:");
    const authorContents = createNewDiv(this.author);
    const pagesHeading = createNewDiv("Pages:");
    const pagesContents = createNewDiv(this.pages);
    const statusHeading = createNewDiv("Status");
    const statusContents = createNewDiv(this.read);
    const titleDiv = createNewDiv("");
    const authorDiv = createNewDiv("");
    const pagesDiv = createNewDiv("");
    const statusDiv = createNewDiv("");
    const buttonDiv = createNewDiv("");
    const cardDiv = createNewDiv("");
    const removeButton = createNewButton("Delete", "deleteButton");
    const statusButton = createNewButton("Change Read Status", "statusButton");
    buttonDiv.appendChild(statusButton);
    buttonDiv.appendChild(removeButton);
    titleDiv.appendChild(titleHeading);
    titleDiv.appendChild(titleContents);
    authorDiv.appendChild(authorHeading);
    authorDiv.appendChild(authorContents);
    pagesDiv.appendChild(pagesHeading);
    pagesDiv.appendChild(pagesContents);
    statusDiv.appendChild(statusHeading);
    statusDiv.appendChild(statusContents);
    cardDiv.appendChild(titleDiv);
    cardDiv.appendChild(authorDiv);
    cardDiv.appendChild(pagesDiv);
    cardDiv.appendChild(statusDiv);
    cardDiv.appendChild(buttonDiv);
    cardDiv.classList.add("card");
    contents.appendChild(cardDiv);
  }
}

const addBook = function addBookToLibraryIfValid() {
  if (title.value && pages.value && author.value) {
    const titleValue = title.value;
    const authorValue = author.value;
    const pagesValue = pages.value;
    let readValue;

    if (read.checked) {
      readValue = "Read";
    } else {
      readValue = "Not Read";
    }

    const newBook = new Book(titleValue, authorValue, pagesValue, readValue);
    newBook.addBookToLibrary();
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = "";
  }
};

bookAddButton.addEventListener("click", () => {
  if (
    checkFilled(author) &&
    checkFilled(pages) &&
    checkNumber(pages) &&
    checkFilled(title)
  ) {
    addBook();
  } else {
    if (!checkFilled(author)) {
      displayError(author, "Add the author's name");
    }
    if (!checkFilled(pages)) {
      displayError(pages, "Enter the number of pages");
    }
    if (!checkNumber(pages)) {
      displayError(pages, "Enter a valid number");
    }
    if (!checkFilled(title)) {
      displayError(title, "Add the title");
    }
  }
});

function createNewButton(textContents, className) {
  const button = document.createElement("button");
  button.innerText = textContents;
  button.classList.add(className);
  button.setAttribute("type", "button");
  return button;
}

function createNewDiv(textContents) {
  const div = document.createElement("div");
  div.innerText = textContents;
  return div;
}

function refreshLibrary() {
  contents.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    myLibrary[i].addCard();
  }
  deleteButtons = document.querySelectorAll(".deleteButton");
  statusButtons = document.querySelectorAll(".statusButton");
  for (let i = 0; i < myLibrary.length; i++) {
    deleteButtons[i].addEventListener("click", () => {
      myLibrary.splice(i, 1);
      refreshLibrary();
    });
    statusButtons[i].addEventListener("click", () => {
      if (myLibrary[i].read === "Read") {
        myLibrary[i].read = "Not Read";
      } else {
        myLibrary[i].read = "Read";
      }
      refreshLibrary();
    });
  }
}

const LOTR = new Book("Lord of The Rings", "J.R.R. Tolkien", 1178, "Read");
const WOT = new Book(
  "Wheel of Time",
  "Robert Jordan & Brandon Sanderson",
  11898,
  "Read"
);

window.addEventListener("DOMContentLoaded", () => {
  LOTR.addBookToLibrary();
  WOT.addBookToLibrary();
});
