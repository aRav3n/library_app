let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.getInfo = function() {
        let string = title + ' was written by ' + author + '. It is ' + pages + ' pages long and I have ' + read + ' it.' 
        return string
    }
}

function addBookToLibrary () {
    
}

let LOTR = new Book('Lord of The Rings', 'JRR Tolkien', 1178, 'read')