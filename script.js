const author = document.getElementById('author');
const bookAddButton = document.getElementById('addToCollection');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const title = document.getElementById('title');

let authorValue = author.value;
let LOTR = new Book('Lord of The Rings', 'J.R.R. Tolkien', 1178, 'Read');
let myLibrary = [];

function addBookToLibrary () {
};

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

bookAddButton.addEventListener('click', () => {
    
});