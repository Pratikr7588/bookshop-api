const axios = require('axios');

// Example: Fetch all books using Async/Await
async function getBooks() {
  try {
    const response = await axios.get('http://localhost:3000/books');
    console.log('Books:', response.data);
  } catch (error) {
    console.error('Error fetching books:', error.message);
  }
}

// Example: Fetch book by ISBN using Promises
function getBookByISBN(isbn) {
  axios.get(`http://localhost:3000/books/isbn/${isbn}`)
    .then(response => console.log('Book:', response.data))
    .catch(error => console.error('Error:', error.message));
}

// Call the functions
getBooks();
getBookByISBN('12345');
