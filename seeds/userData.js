const { User } = require('../models');

const userdata = [
  {
    name: 'Alex',
    password: 'alex'
  },
  {
    name: 'Chris',
    password: 'chris'
  },
  {
    name: 'Hunter',
    password: 'hunter'
  },
  {
    name: 'Madalyn',
    password: 'madalyn'
  },
  {
    name: 'Michael',
    password: 'michael'
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;