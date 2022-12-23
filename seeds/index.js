const sequelize = require('../config/connection');
const Books = require('../models/Books');
const bookData = require('./books-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Books.bulkCreate(bookData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();