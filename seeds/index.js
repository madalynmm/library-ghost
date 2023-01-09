const sequelize = require('../config/connection');
const seedUser = require('./userData');
//const seedBookAssignment = require('./bookAssignmentData');
//const seedBookUser = require("./bookUserData");
const seedBooks = require("./booksData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

 // await seedBookAssignment();

 // await seedBookUser();

  await seedBooks();

  process.exit(0);
};

seedAll();