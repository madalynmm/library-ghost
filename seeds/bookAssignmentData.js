const { BookAssignment } = require('../models');

const bookassignmentdata = [
  {
    'id': 1,
    'description': "library"
  },
  {
    "id": 2,
    "description": "wishlist"
  }
];

const seedBookAssignment = () => BookAssignment.bulkCreate(bookassignmentdata);

module.exports = seedBookAssignment;