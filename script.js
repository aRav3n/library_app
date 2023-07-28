const bookAddButton = document.querySelector('#addToCollection');
const contents = document.querySelector('#contents');
const sidebar = document.querySelector('#sidebar');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const title = document.querySelector('#title');
const myLibrary = [];
const LOTR = new Book('Lord of The Rings', 'J.R.R. Tolkien', 1178, 'Read');
let deleteButtons = document.querySelectorAll('.deleteButton');
let statusButtons = document.querySelectorAll('.statusButton');

window.addEventListener('DOMContentLoaded', () => {
    addBookToLibrary(LOTR);
});

bookAddButton.addEventListener('click', () => {
    if(title.value && pages.value && author.value){
        let titleValue = title.value;
        let authorValue = author.value;
        let pagesValue = pages.value;
        let readValue;
    
        if(read.checked) {
            readValue = 'Read'
        } else {
            readValue = 'Not Read'
        };
    
        let newBook = new Book(titleValue, authorValue, pagesValue, readValue);
        addBookToLibrary(newBook);
        title.value = '';
        author.value = '';
        pages.value = '';
        read.checked = '';
    };
});

function addBookToLibrary(book) {
    myLibrary.push(book);
    refreshLibrary();
};

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.addCard = function() {
        let titleHeading = createNewDiv('Title:');
        let titleContents = createNewDiv(this.title);
        let authorHeading = createNewDiv('Author:');
        let authorContents = createNewDiv(this.author);
        let pagesHeading = createNewDiv('Pages:');
        let pagesContents = createNewDiv(this.pages);
        let statusHeading = createNewDiv('Status');
        let statusContents = createNewDiv(this.read);
        let titleDiv = createNewDiv('');
        let authorDiv = createNewDiv('');
        let pagesDiv = createNewDiv('');
        let statusDiv = createNewDiv('');
        let buttonDiv = createNewDiv('');
        let cardDiv = createNewDiv('');
        let removeButton = createNewButton('Delete', 'deleteButton');
        let statusButton = createNewButton('Change Read Status', 'statusButton');
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
        cardDiv.classList.add('card');
        contents.appendChild(cardDiv);
    };
};

function createNewButton(textContents, className) {
    let button = document.createElement('button');
    button.innerText = textContents;
    button.classList.add(className);
    button.setAttribute('type', 'button');
    return button;
};

function createNewDiv(textContents) {
    let div = document.createElement('div');
    div.innerText = textContents;
    return div;
};

function refreshLibrary() {
    contents.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        myLibrary[i].addCard();
    };
    deleteButtons = document.querySelectorAll('.deleteButton');
    statusButtons = document.querySelectorAll('.statusButton');
    for (let i = 0; i < myLibrary.length; i++){
        deleteButtons[i].addEventListener('click', () => {
            myLibrary.splice(i, 1);
            refreshLibrary();
        });
        statusButtons[i].addEventListener('click', () => {
            if (myLibrary[i].read === 'Read'){
                myLibrary[i].read = 'Not Read';
            } else {
                myLibrary[i].read = 'Read';
            };
            refreshLibrary();
        });
    };
};