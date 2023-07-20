const author = document.querySelector('#author');
const bookAddButton = document.querySelector('#addToCollection');
const pages = document.querySelector('#pages');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.getInfo = function() {
        let string = title + ' was written by ' + author + '. It is ' + pages + ' pages long and I have ' + read + ' it.' 
        return string
    }
};

function addBookToLibrary () {

};

bookAddButton.addEventListener('click', () => {

});

let LOTR = new Book('Lord of The Rings', 'J.R.R. Tolkien', 1178, 'Read');