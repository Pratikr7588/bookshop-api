const express = require('express');
const { getBooks, getBookByISBN, getBooksByAuthor, getBooksByTitle, getBookReview } = require('../controllers/booksController');

const router = express.Router();

// Book Routes
router.get('/', getBooks);
router.get('/isbn/:isbn', getBookByISBN);
router.get('/author/:author', getBooksByAuthor);
router.get('/title/:title', getBooksByTitle);
router.get('/:isbn/review', getBookReview);

module.exports = router;
