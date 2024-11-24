const books = require('../models/books.json');

// Get all books
exports.getBooks = (req, res) => {
  res.status(200).json(books);
};

// Get book by ISBN
exports.getBookByISBN = (req, res) => {
  const { isbn } = req.params;
  const book = books.find(b => b.isbn === isbn);
  if (book) res.status(200).json(book);
  else res.status(404).json({ message: 'Book not found' });
};

// Get books by Author
exports.getBooksByAuthor = (req, res) => {
  const { author } = req.params;
  const filteredBooks = books.filter(b => b.author.toLowerCase() === author.toLowerCase());
  res.status(200).json(filteredBooks);
};

// Get books by Title
exports.getBooksByTitle = (req, res) => {
  const { title } = req.params;
  const filteredBooks = books.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
  res.status(200).json(filteredBooks);
};

// Get book reviews
exports.getBookReview = (req, res) => {
  const { isbn } = req.params;
  const book = books.find(b => b.isbn === isbn);
  if (book) res.status(200).json(book.reviews);
  else res.status(404).json({ message: 'Book not found' });
};
