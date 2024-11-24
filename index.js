const express = require('express');
const bodyParser = require('body-parser');
const booksRoutes = require('./routes/books');
const usersRoutes = require('./routes/users');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/books', booksRoutes);
app.use('/users', usersRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
