const bookAddButton = document.querySelector('#addToCollection');
const contents = document.querySelector('#contents');
const sidebar = document.querySelector('#sidebar');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const title = document.querySelector('#title');

bookAddButton.addEventListener('click', () => {
    console.log("button clicked")
    let authorValue = document.querySelector('#author').value;
    let pagesValue = document.querySelector('#pages').value;
    let readValue = document.querySelector('#read').value;
    let titleValue = document.querySelector('#title').value;

    if (read.checked) {
        readValue = 'Read'
    } else {
        readValue = 'Not Read'
    };

    let bookObject = new Book(titleValue, authorValue, pagesValue, readValue);

    addBookToLibrary(bookObject);
});

let LOTR = new Book('Lord of The Rings', 'J.R.R. Tolkien', 1178, 'Read');
let myLibrary = [];
myLibrary.push(LOTR);
LOTR.addCard();

function addBookToLibrary (bookName) {
    myLibrary.push(bookName);
    contents.innerHTML = '';

    for (let item of myLibrary) {
        item.addCard();
    };
};

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.addCard = function() {
        let titleHeading = createNewDiv('Title:');
        let titleContents = createNewDiv(title);
        let authorHeading = createNewDiv('Author:');
        let authorContents = createNewDiv(author);
        let pagesHeading = createNewDiv('Pages:');
        let pagesContents = createNewDiv(pages);
        let statusHeading = createNewDiv('Status');
        let statusContents = createNewDiv(read);
        let titleDiv = createNewDiv('');
        let authorDiv = createNewDiv('');
        let pagesDiv = createNewDiv('');
        let statusDiv = createNewDiv('');
        let cardDiv = createNewDiv('');
        cardDiv.classList.add('card');
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
        contents.appendChild(cardDiv);
    };
};

function convertToObjectName(name) {
    let objectName;
    nameArray = name.split(' ');
    for(let word of nameArray) {
        let newWord = word.toLowerCase();
        let upperCaseLetter = newWord.charAt(0).toUpperCase();
        newWord.charAt(0) = upperCaseLetter;
        objectName += newWord;
    };
    return objectName;
};

function createNewDiv(textContents) {
    let div = document.createElement('div');
    div.innerText = textContents;
    return div;
};

window.addEventListener('DOMContentLoaded', () => {
    for (let item in myLibrary){
        item.addCard;
    };
});