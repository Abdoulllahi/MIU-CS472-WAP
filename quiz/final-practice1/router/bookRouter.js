const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');

router.delete('/books/:bookId', bookController.deleteById);
router.put('/books/:bookId', bookController.updateById);
router.get('/books', bookController.getBookByAuthorFirstName);
router.post('/books', bookController.save);
router.get('/books/:bookId', bookController.fetchById);