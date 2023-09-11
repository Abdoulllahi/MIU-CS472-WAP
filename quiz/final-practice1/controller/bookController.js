const Book = require('../model/book');

let controller = {
    fetchById: function (req, res, next) {
        let result = res.json(Book.getById(req.params.bookId));
        if (result.message == undefined) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    },

    save: function (req, res, next) {
        res.status(201).json(new Book(null, req.body.title, req.body.author).save());
    },

    getBookByAuthorFirstName: function (req, res, next) {
        res.json(Book.getByAuthorFirstName(req.query.firstName));
    },

    deleteById: function (req, res, next) {
        
        let result = Book.deleteById(req.params.bookId);
        if (result.message == undefined) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    },

    updateById: function (req, res, next) {
        
        const result = new Book(req.params.bookId, req.params.title, req.params.author).edit();
        if (result.message == undefined) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    }

}

module.exports = controller;