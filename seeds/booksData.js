const { Books } = require('../models');

const bookdata = [
  {
    "title": "Harry Potter and the Sorcerer's Stone",
  },
  {
    "title": "Harry Potter and the Chamber of Secrets",
  },
];

const seedBooks = () => Books.bulkCreate(bookdata);

module.exports = seedBooks;