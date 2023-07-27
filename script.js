let bookAddButton;
let contents;
let sidebar;
let author;
let pages;
let read;
let title;

window.addEventListener('DOMContentLoaded', () => {
    bookAddButton = document.querySelector('#addToCollection');
    contents = document.querySelector('#contents');
    sidebar = document.querySelector('#sidebar');
    author = document.querySelector('#author');
    pages = document.querySelector('#pages');
    read = document.querySelector('#read');
    title = document.querySelector('#title');


    let myLibrary = [];
    let LOTR = new Book('Lord of The Rings', 'J.R.R. Tolkien', 1178, 'Read');
    myLibrary.push(LOTR);
    LOTR.addCard();

    for (let item in myLibrary){
        item.addCard;
    };
});

function addBookToLibrary (bookName) {
    myLibrary.push(bookName);
    contents.innerHTML = '';

    for (let item of myLibrary) {
        item.addCard();
    };
};

function addCard(book) {

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
        cardDiv.classList.add('card');
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