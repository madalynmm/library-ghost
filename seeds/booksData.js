const { Books } = require('../models');

const bookdata = [
  {
    "isbn": "0439708184",
    "title": "Harry Potter and the Sorcerer's Stone",
    "author": "JK Rowling",
    "user_id": 1,
  },
  {
    "isbn": "0439064872",
    "title": "Harry Potter and the Chamber of Secrets",
    "author": "JK Rowling",
    "user_id": 1
  },
];

const seedBooks = () => Books.bulkCreate(bookdata);

module.exports = seedBooks;