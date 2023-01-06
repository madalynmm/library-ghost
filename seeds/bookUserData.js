const { BookUser } = require('../models');

const bookuserdata = [
  {
    'user_id': 1,
    "book_id": 1,
    "assignment_id": 1
  },
  {
    'user_id': 1,
    "book_id": 2,
    "assignment_id": 1
  },
];

const seedBookUser = () => BookUser.bulkCreate(bookuserdata);

module.exports = seedBookUser;