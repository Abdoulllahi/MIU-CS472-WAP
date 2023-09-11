let db = [
    {
        "bookId": 1,
        "title": "Node.js",
        "author": {
            "authorId": 303,
            "firstname": "Edward",
            "lastname": "Jack"
        }
    },
    {
        "bookId": 2,
        "title": "Angular",
        "author": {
            "authorId": 308,
            "firstname": "John",
            "lastname": "Smith"
        }
    }
]

let counter = db.length;
class Book {

    constructor(bookId, title, author) {

        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }

    static getByAuthorFirstName(firstName) {
        return firstName ? db.filter(book => book.author.firstname.toLowerCase() == firstName.toLowerCase()) : db;
    }

    static getById(bookId) {

        const index = db.findIndex(book => book.bookId == bookId);
        if (index > -1) {
            return db[index];
        } else {
            return {message: `Didn't find the book with id ${bookId}`}
        }
    }

    save() {
        
        this.bookId = ++counter;
        db.push(this);
        return this;
    }

    edit() {

        const index = db.findIndex(book => book.bookId == this.bookId);
        if (index > -1) {
            db.splice(index, 1, this);
            return this;
        } else {
            return { error: "Could not update it" };
        }
    }

    static deleteById(bookId) {

        const index = db.findIndex(book => book.bookId == bookId);
        if (index > -1) {
            const deletedBook = db[index];
            db.splice(index, 1);
            return deletedBook;
        } else {
            return { message: `Could not find a book with id ${bookId}` };
        }
    }

}

module.exports = Book;